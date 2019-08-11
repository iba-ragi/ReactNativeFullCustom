## Level
- [master(full custom)](https://github.com/iba-ragi/ReactNativeFullCustom)
  - Has all functions 
- [1.2.0](https://github.com/iba-ragi/ReactNativeFullCustom/tree/level_1.2.0)
  - +RNFirebase
- [1.0.0(basic template)](https://github.com/iba-ragi/ReactNativeFullCustom/tree/level_1.0.0)
  - TypeScript
  - Prettier
  - Redux
  - ReduxPersist
  - RNConfig
  - Axios
  - StyledComponents

## Environment(Build Scheme)
- Production
- Development

## Setup
1. Install modules
```shell
$ yarn install && cd ios && pod install && cd ..  
```
2. Build
```shell
yarn dev:ios // yarn dev:android
```

## Debugging
- Boot `Teact Native Debugger`
```shell
$ yarn debugger
```

- Watch/Auto-Compile by `Typescript`
```shell
$ yarn tsc
```

## Troubleshooting
```shell
$ yarn clean
```

----

## Operation this repository for Ibaragi
[] level1 からブランチを切る
[] 他のlevelの機能が欲しい場合は適宜marge
[] READMEの更新
[] 機能の実装
[] masterへのマージ
[] 派生ブランチへ変更をマージ(v1.0.0の更新の場合)
