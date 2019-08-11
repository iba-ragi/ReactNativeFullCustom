import React from 'react'
import styled from 'styled-components/native'
import { SimpleInterpolation } from 'styled-components'

import { colors } from '@src/assets/colors'
import { size, weight } from '@src/assets/fonts'

type Props = {
  onPress: () => void
  text: string
  disabled?: boolean
  size?: number
  background?: string
  css?: SimpleInterpolation
}

export function FlatButton({
  onPress,
  disabled = false,
  size = 35,
  background = colors.primary50,
  text,
  css
}: Props) {
  return (
    <Wrapper
      disabled={disabled}
      size={size}
      background={background}
      onPress={onPress}
      css={css}
    >
      <ButtonText>{text}</ButtonText>
    </Wrapper>
  )
}

const Wrapper = styled.TouchableOpacity<{
  disabled: boolean
  size: number
  background: string
  css: SimpleInterpolation
}>`
  height: 36px;
  background: ${({ disabled, background }) =>
    disabled ? '#dbedff' : background};
  align-items: center;
  justify-content: center;
  line-height: 32px;
  border-radius: 4px;
  border: none;
  padding: 0 16px;
  ${({ css }) => css};
`

const ButtonText = styled.Text`
  color: ${colors.light100};
  font-size: ${size[16]};
  font-weight: ${weight.w5};
`
