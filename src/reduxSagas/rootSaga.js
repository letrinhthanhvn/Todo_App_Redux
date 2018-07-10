// Saga effect 

import { delay } from 'redux-saga'

import { call, all, fork } from 'redux-saga/effects'

import { watchAddWord } from './addSaga'

export default function* rootSaga() {
     yield all([
        fork(watchAddWord)
        ])
}