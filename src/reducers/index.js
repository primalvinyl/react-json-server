import { combineReducers } from 'redux';
import { PUT_GAMES, PUT_UI } from '../actions';

export function games(state = [], action) {
    switch(action.type){
        case PUT_GAMES:
            return [
                ...action.games
            ]
        default:
            return state
    }
}

export function ui(state = {}, action) {
    switch(action.type){
        case PUT_UI:
            return {
                ...state,
                ...action.ui
            }
        default:
            return state
    }
}

export default combineReducers({
    games,
    ui
})
