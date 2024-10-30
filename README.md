<div align="center">
    <h1>React Native Config Info</h1>
    <p>Read configuration values from Info.plist (iOS) or from resources strings.xml (Android)</p>
</div>

<div align="center">

[![github ci](https://img.shields.io/github/actions/workflow/status/remscodes/react-native-config-info/npm-ci.yml.svg?&logo=github&label=CI&style=for-the-badge)](https://github.com/remscodes/react-native-config-info/actions/workflows/npm-ci.yml)
[![npm version](https://img.shields.io/npm/v/react-native-config-info.svg?&style=for-the-badge&logo=npm)](https://www.npmjs.org/package/react-native-config-info)
[![bundle size](https://img.shields.io/bundlephobia/minzip/react-native-config-info.svg?style=for-the-badge)](https://bundlephobia.com/package/react-native-config-info)
[![license](https://img.shields.io/github/license/remscodes/react-native-config-info.svg?style=for-the-badge)](LICENSE)

</div>

## Installation

```shell
npm install react-native-config-info
cd ios && pod install
```

## Prerequisite

Add your values into your Info.plist (iOS) or strings.xml (Android).

### iOS

_ios/\[project\]/Info.plist_

```text
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>BackendUrl</key>
    <string>https://api.example.com</string>
</dict>
</plist>
```

### Android

_android/app/src/main/res/values/strings.xml_

[//]: # (@formatter:off)
```xml
<resources>
    <string name="BackendUrl">https://api.example.com</string>
</resources>
```
[//]: # (@formatter:on)

## Usage

### Asynchronous getters

Get your values.

```ts
import ConfigInfo from 'react-native-config-info';

async function main() {
  await ConfigInfo.get('BackendUrl'); // https://api.example.com
  await ConfigInfo.getOrThrow('BackendUrl'); // https://api.example.com

  await ConfigInfo.get('UnknownKey'); // null
  await ConfigInfo.getOrThrow('UnknownKey'); // [RNConfigInfoException: 'UnknownKey' value is missing from ….]
}
```

### Synchronous getters

Get your values synchronously.

As said in the official [documentation](https://reactnative.dev/docs/0.70/native-modules-ios#synchronous-methods),
synchronous methods are not recommended.

Only use them if you have no other option.

```ts
import ConfigInfo from 'react-native-config-info';

ConfigInfo.getSync('BackendUrl'); // https://api.example.com
ConfigInfo.getSyncOrThrow('BackendUrl'); // https://api.example.com

ConfigInfo.getSync('UnknownKey'); // null
ConfigInfo.getSyncOrThrow('UnknownKey'); // [RNConfigInfoException: 'UnknownKey' value is missing from ….]
```

## License

[MIT](LICENSE) © Rémy Abitbol.
