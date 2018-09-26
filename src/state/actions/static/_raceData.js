import load from '../../../utils/utils';

export const _raceData = (dispatch) => {
    const response = load('/api/race')
    response.subscribe(data => {
        const _raceDataObservable = data;
        return dispatch({
            type: '_SET_RACE_DATA',
            _raceDataObservable
        });
    })
}