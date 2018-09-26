import { connect } from 'react-redux'
import { roll, setName } from '../state/actions'
import StatBlock from '../components/StatBlock/StatBlock'

const mapStateToProps = state => {
  return {
    characterStats: state.characterStats,
    name: state.characterGeneral
  }
}

const mapDispatchToProps = dispatch => ({
  onRoll: (type) => {
    (roll(dispatch, type))
  },
  onNameChange: (type) => {
    (setName(dispatch, type))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatBlock)