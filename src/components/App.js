import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Styled from 'styled-components'
import StatBlock from './statblock/StatBlock';
import {Observable} from 'rxjs';


const Wrapper = Styled.div`
  border: 1px solid red;
  background-color: grey;
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

		this.load('/api/ping').subscribe(val => {
			console.log('value: ', val);
		});

		this.load('/api/legal').subscribe(val => {
			console.log('value: ', val);
		});

		this.load('/api/race').subscribe(val => {
			console.log('value: ', val);
		});

		return (
			<Wrapper>
				<AddTodo />
				<VisibleTodoList />
				<StatBlock />
				<Footer />
			</Wrapper>
		)
	}
}

export default App