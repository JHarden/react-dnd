
const _roll = () => (1 + Math.floor(Math.random() * 6)) + (1 + Math.floor(Math.random() * 6)) + (1 + Math.floor(Math.random() * 6))

export const roll = dispatch => {

	const stats = {
		str: _roll(),
		dex: _roll(),
		con: _roll(),
		int: _roll(),
		wiz: _roll(),
		cha: _roll()
	}
	dispatch({
		type: "ROLL",
		stats
	});
}