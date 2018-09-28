import { connect } from 'react-redux'
import RacialTraits from '../components/RaceTraits/RacialTraits'

const mapStateToProps = state => {

  const selectedRace = state.characterGeneral.race;
  let selectedRaceTraits;
  if (state._raceModel._raceData.data) {
    selectedRaceTraits = state._raceModel._raceData.data.races[selectedRace];
  }

  return {
    selectedRaceTraits,
    selectedRace
  }
}

export default connect(
  mapStateToProps
)(RacialTraits)