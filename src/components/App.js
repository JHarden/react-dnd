import React from 'react'
// import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'
import Styled from 'styled-components'
import { Observable } from 'rxjs';

import StatBlockConnect from '../containers/StatBlockConnect';
import RaceSelector from '../components/RaceSelector/RaceSelector';

const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;

`;

class App extends React.Component {

	// TODO move this somewhere useful

	load(url) {
		return Observable.create(observer => {
			let xhr = new XMLHttpRequest();

			let onload = () => {
				if (xhr.status === 200) {
					let data = JSON.parse(xhr.responseText);
					observer.next(data);
					observer.complete();
				} else {
					observer.error(xhr.statusText);
				}
			};
			xhr.addEventListener('load', onload);

			xhr.open('GET', url);
			xhr.send();

			return () => {
				xhr.removeEventListener('load', onload);
				xhr.abort();
			};
		});
	}

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