import {
    TOGGLE_IS_ADDING,
    FILTER_SHOW_ALL, FILTER_MEMORIZED, FILTER_NEED_PRACTICE,
    ADD_WORD, TOGGLE_SHOW, TOGGLE_MEMORIZED
} from './index'

// addForm, showAllMode, showMemorizedMode, showNeedPracticeMode, addWords, toggleShow, toggleMemorized

export const addForm = () => {
    return {
        type: TOGGLE_IS_ADDING
    }
}

export const showAllMode = () => {
    return {
        type: FILTER_SHOW_ALL,
    }
}

export const showMemorizedMode = () =>{
    return {
        type: FILTER_MEMORIZED,
    }
}

export const showNeedPracticeMode = ()=> {
    return {
        type: FILTER_NEED_PRACTICE
    }
}

export const addWords = (word)=> {
    return {
        type: ADD_WORD,
        word
    }
}

export const addWordsSuccess = (en, vn)=> {
    return {
        type: ADD_WORD_SUCCESS,
        en,
        vn
    }
}



export const toggleShow = (id) => {
    return {
        type: TOGGLE_SHOW,
        id
    }
}


export const toggleMemorized = (id)=> {
    return {
        type: TOGGLE_MEMORIZED,
        id
    }
}

