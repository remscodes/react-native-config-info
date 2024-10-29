import { NativeModules } from 'react-native';

const { RNConfigInfo } = NativeModules;

interface ConfigInfo {
    /**
     * Synchronously returns value from Info.plist (iOS) or from resources strings (Android) associated to the provided key.
     * @param key - The config key.
     */
    getSync<T extends string = string>(key: string): T | null;

    /**
     * Synchronously returns value from Info.plist (iOS) or from resources strings (Android) associated to the provided key.
     * @param key - The config key.
     * @throws - if value is `null`.
     */
    getSyncOrThrow<T extends string = string>(key: string): T;

    /**
     * Asynchronously returns value from Info.plist (iOS) or from resources strings (Android) associated to the provided key.
     * @param key - The config key.
     */
    get<T extends string = string>(key: string): Promise<T | null>;

    /**
     * Asynchronously returns value from Info.plist (iOS) or from resources strings (Android) associated to the provided key.
     * @param key - The config key.
     * @throws - if value is `null`.
     */
    getOrThrow<T extends string = string>(key: string): Promise<T>;
}

export default RNConfigInfo as ConfigInfo;
