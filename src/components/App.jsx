import React from 'react'
import Styled from 'styled-components'

import StatBlockConnect from '../containers/StatBlockConnect';
import RaceSelector from './RaceSelector/RaceSelector';

const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;

`;

class App extends React.Component {

	render() {
		return (
			<Wrapper>
				<StatBlockConnect />
				<RaceSelector />
			</Wrapper>
		)
	}
}

export default App