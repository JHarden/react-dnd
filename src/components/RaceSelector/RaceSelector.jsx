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
		this.props.onRaceChange(event.target.value);
	}

	render() {
		const races = this.props._raceData && this.props._raceData.Races || undefined;

		if (races !== undefined) {

			const raceKeys  = this._getRaceKeys(races._race_data);

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