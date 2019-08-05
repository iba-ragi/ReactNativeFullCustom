/**
 * @format
 */

import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import App from '@src/App'
import StorybookUIRoot from './storybook'

/**
 * ストーリーブックを使う際は isUsingStorybook = true へ変更
 */
const isUsingStorybook = true
// const isUsingStorybook = false

AppRegistry.registerComponent(appName, () =>
  isUsingStorybook ? StorybookUIRoot : App
)
