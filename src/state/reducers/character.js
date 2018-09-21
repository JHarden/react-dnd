
const initialState = {
    name: 'Adventurer'
}

function characterGeneral(state = initialState, action) {
    switch(action.type) {
        case 'SET_NAME':
        return Object.assign({}, state, {
            name: action.name
        })
        default: 
            return state;
    }
}

export default characterGeneral