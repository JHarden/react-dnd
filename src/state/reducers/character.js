
const initialState = {
    name: 'Adventurer',
    race: 'Human'
}

function characterGeneral(state = initialState, action) {
    switch(action.type) {
        case 'SET_NAME':
        return Object.assign({}, state, {
            name: action.name
        })
        case 'SET_RACE':
        return Object.assign({}, state, {
            race: action.race.type
        })
        default: 
            return state;
    }
}

export default characterGeneral