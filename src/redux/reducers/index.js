import { combineReducers } from 'redux'
import 
    arrWordsReducer
 from './arrWordsReducer'
import 
    isAddingReducer
 from './isAddingReducer'

import 
    showModeReducer
 from './showModeReducer'

console.log('arrWordsReducer', arrWordsReducer)

const allReducers = combineReducers({
    arrWordsReducer: arrWordsReducer,
    isAddingReducer: isAddingReducer,
    showModeReducer: showModeReducer,
})

export default allReducers;