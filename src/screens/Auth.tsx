import React from 'react'
import styled from 'styled-components/native'
import { NavigationScreenProps } from 'react-navigation'
import { routeNames } from '@src/navigation/routeNames'

type Props = {} & NavigationScreenProps

export function Auth({ navigation }: Props) {
  return (
    <Wrapper>
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
