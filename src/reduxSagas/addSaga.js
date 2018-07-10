import { ADD_WORD, ADD_WORD_SUCCESS } from '../redux/actions/index'

import { put, takeLatest } from 'redux-saga/effects';

import { delay } from 'redux-saga'

function* hello() {
     
    
}

function* addWord(action) {
    console.log("SUCCESS", action)
    yield hello()
    yield put({type: ADD_WORD_SUCCESS, word: action.word})
}

export function* watchAddWord() {
    yield takeLatest(ADD_WORD, addWord)
}

