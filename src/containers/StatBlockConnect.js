import { connect } from 'react-redux'
import { roll } from '../state/actions'
import StatBlock from '../components/statBlock/StatBlock'

const mapStateToProps = state => {
  return {
    activeRoll: state.roll
  }
}

const mapDispatchToProps = dispatch => ({
  onRoll: (type) => {
    (roll(dispatch, type))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatBlock)