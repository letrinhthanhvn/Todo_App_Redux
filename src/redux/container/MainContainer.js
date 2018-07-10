

import Main from '../../components/Main'

import { connect } from 'react-redux'

// Action 

import {
    addForm, 
    showAllMode, 
    showMemorizedMode, 
    showNeedPracticeMode, 
    addWords, 
    toggleShow, 
    toggleMemorized
} from '../actions/actionsType'
// import { TOGGLE_MEMORIZED } from '../actions';

const mapStateToProps = (state) => {
    return {
        myFilter: state.showModeReducer,
        myWords: state.arrWordsReducer,
        myIsAdding: state.isAddingReducer
    }
}

const mapDispatchToProps = {
    addForm, 
    showAllMode, 
    showMemorizedMode, 
    showNeedPracticeMode, 
    addWords, 
    toggleShow, 
    toggleMemorized
}

    const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)
    
export default MainContainer;



