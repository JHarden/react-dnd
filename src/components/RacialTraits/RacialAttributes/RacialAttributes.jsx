import React from 'react';
import PropTypes from 'prop-types';

class RacialAttributes extends React.Component {

	constructor(props) {
		super(props)
	}

	getRacialTraits = (traits) => {
		const traitList = Object.keys(traits);
		const list = [];
		for(const trait of traitList) {	 
			list.push(
				<div>
				<h3>{trait}</h3>
				<p>{traits[trait]}</p>
				</div>)
		}
		return list;
	}

	render() {
		const traits = this.props.selectedRacialAttributes && this.props.selectedRacialAttributes.attributes;
		return (
			<div>
				Racial Attributes
				{traits ?
					<div>
						<h2>Traits</h2>
						{traits.trait_racial ? this.getRacialTraits(traits.trait_racial) : ''}
					</div>
					: <div></div>
				}
			</div>
		)

	}
}

RacialAttributes.propTypes = {
	selectedRacialAttributes: PropTypes.object
}

export default RacialAttributes;