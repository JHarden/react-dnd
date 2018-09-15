import { connect } from 'react-redux'
import { roll } from '../state/actions'
import StatBlock from '../components/statblock/StatBlock'

const mapStateToProps = (state, ownProps) => {
  console.log('s: ', state, 'op', ownProps);

  return ({
    selected: state.roll,
    activeRoll: state.roll === ownProps.roll ? state.roll : undefined
})
}

const mapDispatchToProps = dispatch => ({
  roll: stats => {
    dispatch(roll(stats))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatBlock)