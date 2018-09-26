import { connect } from 'react-redux'
import { _raceData, } from '../state/actions/static/_raceData'
import RaceSelector from '../components/RaceSelector/RaceSelector'

const mapStateToProps = state => {
  return {
    _raceData: state._raceModel._raceData,
  }
}

const mapDispatchToProps = dispatch => ({
    _initRaceState: (type) => {
      (_raceData(dispatch, type))
    },
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RaceSelector)