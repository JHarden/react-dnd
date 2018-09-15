
const initialState = {
    stats:  {
      str: 8,
      dex: 8,
      con: 8,
      int: 8,
      wiz: 8,
      cha: 8,
    }
}

function roll(state = initialState, action) {

    switch(action.type) {
        case 'ROLL':
        return Object.assign({}, state, {
            stats: action.stats
        })
        default: 
            return state;
    }
}

export default roll