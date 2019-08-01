import React from 'react'
import styled from 'styled-components/native'

const App = () => {
  return (
    <Wrapper>
      <HelloWorld />
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
  children: 'HelloWorld'
})`
  font-size: 18px;
`

export default App
