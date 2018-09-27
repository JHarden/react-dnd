import { connect } from 'react-redux'
import RacialTraits from '../components/RaceTraits/RacialTraits'

const mapStateToProps = state => {

  // const selectedRace = state.characterGeneral.race;
  // if (state._raceModel._raceData.Races) {
  //   // const selectedRaceTraits = state._raceModel._raceData.Races._race_data[selectedRace];
  //   // console.log('selectedData', selectedRaceTraits);
  // }

  return {
    traits: state._raceModel._raceData.Races,
    selectedRace: state.characterGeneral.race
  }
}

export default connect(
  mapStateToProps
)(RacialTraits)