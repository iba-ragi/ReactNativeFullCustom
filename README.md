## Level
- [master(full custom)](https://github.com/iba-ragi/ReactNativeFullCustom)
  - Has all functions 
- [1.3.0](https://github.com/iba-ragi/ReactNativeFullCustom/tree/level_1.3.0)
  - +[RN Facebook SDK](https://github.com/facebook/react-native-fbsdk)
- [1.2.0](https://github.com/iba-ragi/ReactNativeFullCustom/tree/level_1.2.0)
  - +[RNFirebase](https://invertase.io/oss/react-native-firebase/)
- [1.1.0](https://github.com/iba-ragi/ReactNativeFullCustom/tree/level_1.1.0)
  - +[StoryBoard](https://storybook.js.org/docs/guides/guide-react-native/)
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

## Build
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

## Custom setup
### information property
Check `env.dev` / `env.prod`

### Splash & Icon Image
Check this document
https://github.com/bamlab/generator-rn-toolbox/blob/master/generators/assets/README.md



## Troubleshooting
```shell
$ yarn clean
```

----

## Operation this repository for Ibaragi
### work flow
- [ ] level1 からブランチを切る
- [ ] 他のlevelの機能が欲しい場合は適宜marge
- [ ] READMEの更新
- [ ] 機能の実装
- [ ] masterへのマージ
- [ ] 派生ブランチへ変更をマージ(v1.0.0の更新の場合)

### leveling
`level_a.b.c`
- a: base functions
- b: base functions + multi additional functions
- c: base functions + additional function
