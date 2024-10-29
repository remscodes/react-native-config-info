package dev.rems.reactnativeconfiginfo

import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class RNConfigInfoModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName() = "RNConfigInfo"

    private var notFoundTag: String = "ConfigInfoNotFoundException"

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun getSync(key: String): String? = getFromResources(key)

    @ReactMethod
    fun get(key: String, promise: Promise) = promise.resolve(getFromResources(key))

    private fun getFromResources(key: String): String? {
        try {
            return reactApplicationContext.getString(reactApplicationContext.resources.getIdentifier(key, "string", reactApplicationContext.packageName))
        }
        catch (e: Throwable) {
            Log.w(notFoundTag, "The key $key was not found in resources.", e)
            return null
        }
    }
}
