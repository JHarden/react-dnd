import { connect } from 'react-redux'
import { roll } from '../state/actions'
import StatBlock from '../components/statblock/StatBlock'

const mapStateToProps = state => {
  return {
    activeRoll: state.roll
  }
}

const mapDispatchToProps = dispatch => ({
  onRoll: stats => {
    dispatch(roll(stats))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatBlock)