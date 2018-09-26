
const initialState = {
    _raceData: {}
}

function _raceModel(state = initialState, action) {
    switch(action.type) {
        case '_SET_RACE_DATA':
        return Object.assign({}, state, {
            _raceData: action._raceDataObservable
        })
        default: 
            return state;
    }
}

export default _raceModel