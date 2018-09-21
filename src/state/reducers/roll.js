
const initialState = {
    attributes:  {
      str: 8,
      dex: 8,
      con: 8,
      int: 8,
      wiz: 8,
      cha: 8,
    }
}

function characterStats(state = initialState, action) {

    switch(action.type) {
        case 'ROLL':
        console.log('action: ', action);
        return Object.assign({}, state, {
            attributes: action.attributes
        })
        default: 
            return state;
    }
}

export default characterStats