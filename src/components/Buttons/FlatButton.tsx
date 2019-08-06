import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  disabled: boolean
}

export function FlatButton({ disabled }: Props) {
  return (
    <Wrapper disabled={disabled}>
      <Text>ボタン</Text>
    </Wrapper>
  )
}

const Wrapper = styled.View<Props>`
  flex: 1;
  background-color: ${({ disabled }) => (disabled ? '#dbedff' : '#dbdbdb')};
  align-items: center;
  justify-content: center;
`
