import React from 'react'
import Styled from 'styled-components'

import StatBlockConnect from '../containers/StatBlockConnect';
import RaceSelectorConnect from '../containers/RaceSelectConnect';
import RacialTraitsConnect from '../containers/RacialTraitsConnect';

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
				<RaceSelectorConnect />
				<RacialTraitsConnect />
			</Wrapper>
		)
	}
}

export default App