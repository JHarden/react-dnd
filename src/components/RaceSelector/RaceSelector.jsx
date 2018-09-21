import React from 'react';
import { Observable } from 'rxjs';

// import PropTypes from 'prop-types';
// import Styled from 'styled-components';

class RaceSelector extends React.Component {

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

    // getRaceData() {
    //     console.log('d:', data);
    // }

    componentDidMount() {
        
        const data = this.load('/api/race');
        data.subscribe((e) => {
            console.log('subscribe: ', e);
        })
    }

    render() {

        return (
            <div>
                Race Data...
            </div>
        )
    }
}


// Stat.propTypes = {
//     name: PropTypes.string,
//     value: PropTypes.number
// }

export default RaceSelector;