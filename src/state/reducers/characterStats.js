
const initialState = {
    attributes: {
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wiz: 10,
        cha: 10,
    },
    modifiers: {
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wiz: 0,
        cha: 0,
    },
    hitPoints: 10,
}

function characterStats(state = initialState, action) {

    switch (action.type) {
        case 'ROLL':
            return {
                ...state,
                attributes: { ...action.attributes }
            }
        case 'SET_STAT':
            return {
                ...state,
                modifiers: {
                    ...state.modifiers,
                    ...action.statData
                }
            };
        default:
            return state;
    }
}

export default characterStats