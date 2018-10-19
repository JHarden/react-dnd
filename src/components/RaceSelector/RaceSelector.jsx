import React from 'react';
import PropTypes from 'prop-types';

class RaceSelector extends React.Component {

	_raceDataObject = {};
	_raceList = [];
	selectedRace;

	constructor(props) {
		super(props)
		this.props._initRaceState();
	}

	_getRaceKeys = (races) => {
		return Object.keys(races);
	}

	handleChange = (event) => {
		this.selectedRace = event.target.value;
		const raceSpecificData = this.props._raceData.data.races[event.target.value];
		this.props.onRaceChange(event.target.value, raceSpecificData);
	}

	render() {
		const races = this.props._raceData && this.props._raceData.data || undefined;

		if (races !== undefined) {

			const raceKeys = this._getRaceKeys(races.races);

			return (
				<div>
					<select onChange={this.handleChange} value={this.selectedRace}>
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
	onRaceChange: PropTypes.func,
	_raceData: PropTypes.object
}

export default RaceSelector;