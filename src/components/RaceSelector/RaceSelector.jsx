import React from 'react';
import PropTypes from 'prop-types';

class RaceSelector extends React.Component {

	_raceDataObject = {};
	_raceList = [];

	constructor(props) {
		super(props)
		this.props._initRaceState();
	}

	_getRaceKeys = (races) => {
		return Object.keys(races);
	}

	render() {
		const races = this.props._raceData && this.props._raceData.Races || undefined;

		if (races !== undefined) {

			const raceKeys  = this._getRaceKeys(races._race_data);

			return (
				<div>
					<select>
						{raceKeys.map((option, key) => <option key={key}>{option}</option>)}
					</select>
				</div>
			)


		} else {
			return (<div>LOADING...</div>)
		}

	}
}


RaceSelector.propTypes = {
	_initRaceState: PropTypes.func,
	_raceData: PropTypes.object
}

export default RaceSelector;