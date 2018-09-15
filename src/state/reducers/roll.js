
const initialState = {
    stats:  {
      str: undefined,
      dex: undefined,
      con: undefined,
      int: undefined,
      wiz: undefined,
      cha: undefined,
    }
}

function roll(state = initialState, action) {

    switch(action.type) {
        case 'ROLL':
        console.log('r', action);
        return Object.assign({}, state, {
            stats: action.stats
        })
        default: 
            return state;
    }
}

export default roll