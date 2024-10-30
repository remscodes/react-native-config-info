import { NativeModules } from 'react-native';

const { RNConfigInfo } = NativeModules;

interface ConfigInfo {
  /**
   * Asynchronously returns the value associated to the provided key from Info.plist (iOS) or from resources strings.xml (Android).
   * @param key - The config key.
   * @returns `null` if empty or missing
   */
  get<T extends string = string>(key: string): Promise<T | null>;

  /**
   * Asynchronously returns the value associated to the provided key from Info.plist (iOS) or from resources strings.xml (Android).
   * @param key - The config key.
   * @throws - if value is empty.
   */
  getOrThrow<T extends string = string>(key: string): Promise<T>;

  /**
   * Synchronously returns the value associated to the provided key from Info.plist (iOS) or from resources strings.xml (Android).
   * @param key - The config key.
   * @returns `null` if empty or missing
   */
  getSync<T extends string = string>(key: string): T | null;

  /**
   * Synchronously returns the value associated to the provided key from Info.plist (iOS) or from resources strings.xml (Android).
   * @param key - The config key.
   * @throws - if value is empty.
   */
  getSyncOrThrow<T extends string = string>(key: string): T;

}

export default RNConfigInfo as ConfigInfo;
