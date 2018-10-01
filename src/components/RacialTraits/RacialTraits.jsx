import React from 'react';
import PropTypes from 'prop-types';
import RacialAttributes from './RacialAttributes/RacialAttributes';

class RacialTraits extends React.Component {

	constructor(props) {
		super(props)
	}

	getSelectedRaceTraits = (content) => {
		const _content = Object.keys(content);
		const info = _content.map((title, index) => {
			return (
				<div key={index}>
					<h2>{title}</h2>
					<p>{content[title]}</p>
				</div>
			)
		})
		return (
			<div>
				<div>{this.props.selectedRaceTraits.traits.blurb}</div>
				{info}
			</div>
		)
	}

	getSubRace = (raceTraits) => {
		const subraces = Object.keys(raceTraits.subraces)
		const info = subraces.map((race, index) => {
			const _srData = raceTraits.subraces[race];
			return(
				<div key={index}>
					<h2>{race}</h2>
					<div>{_srData.blurb}</div>
					{this.getSelectedRaceTraits(_srData.content)}
				</div>
			)
		})

		return(<div>{info}</div>);
	}

	render() {
		const traits = this.props.selectedRaceTraits && this.props.selectedRaceTraits.traits;
		return (
			<div>
				<div>{this.props.selectedRace}</div>
				<RacialAttributes selectedRacialAttributes={traits}/>
				<div>
					{this.props.selectedRaceTraits &&
						<div>
							{this.getSelectedRaceTraits(traits.content)}
							{traits.subraces && this.getSubRace(traits)}
						</div>
					}
				</div>
			</div>
		)

	}
}

RacialTraits.propTypes = {
	selectedRace: PropTypes.string,
	selectedRaceTraits: PropTypes.object
}

export default RacialTraits;