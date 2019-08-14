import React from 'react'
import styled, { css } from 'styled-components/native'
import { NavigationScreenProps } from 'react-navigation'

import { useSelector, useDispatch } from '@src/hooks/useRedux'
import { routeNames } from '@src/navigation/routeNames'
import { editUser, clearUserCreator } from '@src/store/ducks/User'
import { FlatButton } from '@src/components/Buttons/FlatButton'
import { colors } from '@src/assets/colors'
import { size } from '@src/assets/fonts'

type Props = {} & NavigationScreenProps

export function Main({ navigation }: Props) {
  const dispatch = useDispatch()
  const { user } = useSelector(({ UserState: { user } }) => ({
    user
  }))

  const onPressEditUser = () => {
    dispatch(editUser())
  }
  const onPressLogout = () => {
    // persist clear
    dispatch(clearUserCreator())
    navigation.navigate(routeNames.Auth.routeName)
  }

  return (
    <Wrapper>
      <AccountInfoContainer>
        <AccountInfoItem>Name: {user!.name}</AccountInfoItem>
        <AccountInfoItem>ID: {user!.user_id}</AccountInfoItem>
      </AccountInfoContainer>

      <FlatButton
        text={'ユーザ編集'}
        onPress={onPressEditUser}
        background={colors.secondary}
        css={buttonCss}
      />
      <FlatButton
        text={'LOGOUT'}
        onPress={onPressLogout}
        background={colors.error}
        css={buttonCss}
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
const AccountInfoContainer = styled.View`
  padding: 24px;
  background-color: ${colors.light030};
  align-items: center;
  justify-content: center;
`
const AccountInfoItem = styled.Text`
  font-size: ${size[20]};
`

const buttonCss = css`
  margin-top: 8px;
`
