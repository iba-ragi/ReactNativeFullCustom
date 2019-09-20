import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { NavigationScreenProps } from 'react-navigation'
import { LoginButton, AccessToken } from 'react-native-fbsdk'

import { routeNames } from '@src/navigation/routeNames'
import { useDispatch } from '@src/hooks/useRedux'
import { getSetUser } from '@src/store/ducks/User'
import { FlatButton } from '@src/components/Buttons/FlatButton'

const FacebookLoginButton = () => (
  <View style={{ marginTop: 8 }}>
    <LoginButton
      onLoginFinished={(error, result) => {
        if (error) {
          console.log('login has error: ' + result.error)
        } else if (result.isCancelled) {
          console.log('login is cancelled.')
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            data
              ? console.log(data.accessToken.toString())
              : console.log('data not found')
          })
        }
      }}
      onLogoutFinished={() => console.log('logout.')}
    />
  </View>
)

type Props = {} & NavigationScreenProps

export function Auth({ navigation }: Props) {
  const dispatch = useDispatch()
  const onPressLogin = () => {
    dispatch(getSetUser())
    navigation.navigate(routeNames.Main.routeName)
  }

  return (
    <Wrapper>
      <FlatButton text={'LOGIN'} onPress={onPressLogin} />
      <FacebookLoginButton />
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  background-color: #dbedff;
  align-items: center;
  justify-content: center;
`
