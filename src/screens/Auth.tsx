import React from 'react'
import styled from 'styled-components/native'
import { NavigationScreenProps } from 'react-navigation'
import { routeNames } from '@src/navigation/routeNames'
import { useDispatch } from '@src/hooks/useRedux'
import { getSetUser } from '@src/store/ducks/User'
import { FlatButton } from '@src/components/Buttons/FlatButton'

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
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  background-color: #dbedff;
  align-items: center;
  justify-content: center;
`
