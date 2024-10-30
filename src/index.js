import { NativeModules, Platform } from 'react-native';
import { RNConfigInfoException } from './config-info-exception';

const { RNConfigInfo } = NativeModules;

const isAndroid = (Platform.OS === 'android');

function isEmpty(value) {
  return (value === undefined) || (value === null) || (value === '');
}

function nullIfEmpty(value) {
  return isEmpty(value) ? null : value;
}

function throwIfEmpty(key, value) {
  if (isEmpty(value)) throw new RNConfigInfoException(`'${key}' value is missing from Info.plist.`);
  return value;
}

export default {
  async get(key) {
    return nullIfEmpty(await RNConfigInfo.get(key));
  },
  async getOrThrow(key) {
    if (isAndroid) return RNConfigInfo.getOrThrow(key);
    return throwIfEmpty(key, await RNConfigInfo.get(key))
  },
  getSync(key) {
    return nullIfEmpty(RNConfigInfo.getSync(key));
  },
  getSyncOrThrow(key) {
    if (isAndroid) return RNConfigInfo.getSyncOrThrow(key);
    return throwIfEmpty(key, RNConfigInfo.getSync(key))
  },
}
