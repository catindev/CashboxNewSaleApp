import { combineReducers } from 'redux';
import { ADD_POSITION } from './actions';

function reducer1(state = {}, action) {
    switch (action.type) {
        case ADD_POSITION:
            return { ...state, Positions: [...state.Positions, action.Position] }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    reducer1
})

export default reducer1

//export default reducer