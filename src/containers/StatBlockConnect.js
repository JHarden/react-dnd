import { connect } from 'react-redux'
import { roll } from '../state/actions'
import StatBlock from '../components/statBlock/StatBlock'

const mapStateToProps = state => {
  console.log('mstp: ', state);
  return {
    characterStats: state.characterStats
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