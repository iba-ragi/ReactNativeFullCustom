import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

type Props = {}

export function FlatButton({  }: Props) {
  return (
    <Wrapper>
      <Text>ボタン</Text>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  background-color: #dbedff;
  align-items: center;
  justify-content: center;
`
