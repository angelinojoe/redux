import {setLyrics} from '../action-creators/lyrics';
const initialState = { text: ''};
import {SET_LYRICS} from '../constants';

export function reducer(state = initialState, action){
    switch(action.type){
        case SET_LYRICS:
            return Object.assign({}, state, { text: action.lyric });
        default:
            return state;

    }
}
