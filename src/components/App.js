import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Styled from 'styled-components'

const Wrapper = Styled.div`
  border: 1px solid red;
  background-color: grey;
`;

const App = () => (
  <Wrapper>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Wrapper>
)

export default App