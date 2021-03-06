
const _roll = (type) => {

	let result;
	if (type === 'hardcore') {
		result = (1 + Math.floor(Math.random() * 6)) + (1 + Math.floor(Math.random() * 6)) + (1 + Math.floor(Math.random() * 6))
	} else {
		let rolls = [];
		for (let i = 0; i < 4; i++) {
			rolls.push(1 + Math.floor(Math.random() * 6));
		}
		let min = Math.min(...rolls);
		result = rolls.reduce((a, b) => a + b, 0) - min;
	}
	return result;
}

export const roll = (dispatch, type) => {
	const attributes = {
		str: _roll(type), dex: _roll(type), con: _roll(type), int: _roll(type), wiz: _roll(type), cha: _roll(type)
	}
	dispatch({
		type: 'ROLL',
		attributes
	});
}

export const setStat = (dispatch, statData) => {
	dispatch({
		type: 'SET_STAT',
		statData
	})
}

export const setName = (dispatch, name) => {
	dispatch({
		type: 'SET_NAME',
		name
	})
}

export const setRace = (dispatch, obj) => {
	const base = {
		str: 0,
		dex: 0,
		con: 0,
		int: 0,
		wiz: 0,
		cha: 0,
	}
	const stats = {...base , ...obj.obj.traits.attributes.ability_racial};

	setStat(dispatch, stats);

	dispatch({
		type: 'SET_RACE',
		race: obj
	})
}

export const getRaceData = (dispatch, name) => {
	dispatch({
		type: 'GET_RACE_DATA',
		name
	})
}