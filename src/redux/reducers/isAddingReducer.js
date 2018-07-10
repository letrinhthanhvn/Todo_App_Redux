import {
    TOGGLE_IS_ADDING
} from '../actions/index'

const isAddingReducer = ( state = false, action) => {
    switch (action.type) {
        case TOGGLE_IS_ADDING: 
            return !state
    }
    return state
}

export default isAddingReducer;