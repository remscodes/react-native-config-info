package dev.rems.reactnativeconfiginfo

import android.annotation.SuppressLint
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class RNConfigInfoModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName() = "RNConfigInfo"

    @ReactMethod
    fun get(key: String, promise: Promise) = promise.resolve(readValue(key))

    @ReactMethod
    fun getOrThrow(key: String, promise: Promise) {
        try {
            promise.resolve(readValueOrThrow(key))
        } catch (e: RNConfigInfoException) {
            promise.reject(e)
        }
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun getSync(key: String): String? = readValue(key)

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun getSyncOrThrow(key: String): String = readValueOrThrow(key)

    @SuppressLint("DiscouragedApi")
    private fun readValue(key: String): String? {
        return try {
            reactApplicationContext.getString(reactApplicationContext.resources.getIdentifier(key, "string", reactApplicationContext.packageName))
        } catch (e: Throwable) {
            null
        }
    }

    private fun readValueOrThrow(key: String): String = readValue(key) ?: throw RNConfigInfoException("$key' value is missing from resources.");
}
