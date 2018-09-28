import React from 'react';
import PropTypes from 'prop-types';

class RacialTraits extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<div>{this.props.selectedRace}</div>
				<div>{this.props.selectedRaceTraits &&
					this.props.selectedRaceTraits.traits.blurb}</div>
			</div>
		)

	}
}

RacialTraits.propTypes = {
	selectedRace: PropTypes.string,
	selectedRaceTraits: PropTypes.object
}

export default RacialTraits;