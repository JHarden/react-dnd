
const initialState = {
    attributes:  {
      str: 8,
      dex: 8,
      con: 8,
      int: 8,
      wiz: 8,
      cha: 8,
    },
    hitPoints: 8
}

function characterStats(state = initialState, action) {

    switch(action.type) {
        case 'ROLL':
        return Object.assign({}, state, {
            attributes: action.attributes
        })
        default: 
            return state;
    }
}

export default characterStats