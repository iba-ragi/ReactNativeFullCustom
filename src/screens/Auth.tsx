import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { NavigationScreenProps } from 'react-navigation'
import { routeNames } from '@src/navigation/routeNames'
import { useSelector, useDispatch } from '@src/hooks/useRedux'
import { addUserText } from '@src/store/ducks/User'

type Props = {} & NavigationScreenProps

export function Auth({ navigation }: Props) {
  const dispatch = useDispatch()
  const { user } = useSelector(({ UserState: { user } }) => ({
    user
  }))
  return (
    <Wrapper>
      <Text>name: {user!.name}</Text>
      <Text>user_id: {user!.user_id}</Text>
      <Text onPress={() => dispatch(addUserText())}>[add 0]</Text>
      <HelloWorld
        onPress={() => {
          navigation.navigate(routeNames.Main.routeName)
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  background-color: #dbedff;
  align-items: center;
  justify-content: center;
`
const HelloWorld = styled.Text.attrs({
  children: '< HelloWorld'
})`
  font-size: 18px;
`
