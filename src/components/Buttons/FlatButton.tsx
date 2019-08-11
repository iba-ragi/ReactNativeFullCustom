import React from 'react'
import { Text } from 'react-native'

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

