import { NativeModules } from 'react-native';

const { RNConfigInfo } = NativeModules;

interface ConfigInfo {
  /**
   * Asynchronously returns value associated to the provided ke from Info.plist (iOS) or from resources (Android).
   * @param key - The config key.
   */
  get<T extends string = string>(key: string): Promise<T | null>;

  /**
   * Asynchronously returns value associated to the provided key from Info.plist (iOS) or from resources (Android).
   * @param key - The config key.
   * @throws - if value is `null`.
   */
  getOrThrow<T extends string = string>(key: string): Promise<T>;

  /**
   * Synchronously returns value from Info.plist (iOS) or from resources (Android) associated to the provided key.
   * @param key - The config key.
   */
  getSync<T extends string = string>(key: string): T | null;

  /**
   * Synchronously returns value from Info.plist (iOS) or from resources (Android) associated to the provided key.
   * @param key - The config key.
   * @throws - if value is `null`.
   */
  getSyncOrThrow<T extends string = string>(key: string): T;

}

export default RNConfigInfo as ConfigInfo;
