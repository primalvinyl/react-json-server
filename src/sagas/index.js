import { take, put, call, fork, all, takeLatest, delay } from 'redux-saga/effects';
import { GET_GAMES, GET_APP_DATA, putGames, putUi } from '../actions';
import { axiosRequest } from '../utilities';
import 'regenerator-runtime/runtime';


/******************************** Workers *************************************/
export function* getGamesWorker(apiMethod) {
    yield put(putUi({ isLoading: true }));
    const response = yield call(apiMethod, 'data');
    yield put(putUi({ isLoading: false }));
    yield put(putGames(response));

    //make request every minute
    yield delay(60000);
    yield call(getGamesWorker, apiMethod);
}


/******************************* Watchers *************************************/
export function* getAppDataWatcher() {
    yield take(GET_APP_DATA);
    yield all([
        fork(getGamesWorker, axiosRequest)
    ]);
}

export function* getGamesListWatcher() {
    yield takeLatest(GET_GAMES, getGamesWorker, axiosRequest);
}


/********************************* Root ***************************************/
export default function* rootSaga() {
    yield all([
        fork(getAppDataWatcher),
        fork(getGamesListWatcher),
    ]);
}
 