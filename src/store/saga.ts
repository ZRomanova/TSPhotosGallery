import {takeEvery, put, call, select} from 'redux-saga/effects'
import { hideLoader, showLoader } from './galleryActions'
import {FETCH_PHOTOS, REQUEST_PHOTOS} from './types'
import {RootState} from './index'

export function* sagaWatcher() {
  yield takeEvery(REQUEST_PHOTOS, sagaWorker)
}

const getOffset = (state: RootState) => state.gallery.offset

function* sagaWorker(): Generator<any> {
  try {
    yield put(showLoader())
    let offset: any = yield select(getOffset);
    const payload = yield call(() => fetchPhotos(offset))
    yield put({ type: FETCH_PHOTOS, payload })
    yield put(hideLoader())
  } catch (e) {
    //yield put(showAlert('Что-то пошло не так'))
    yield put(hideLoader())
  }
}

async function fetchPhotos(page: Number) {
  const response = await fetch(`https://api.pexels.com/v1/curated?page=${page}&per_page=60`, {headers: {Authorization: '563492ad6f91700001000001912c5fcd9e6d4ffc8f9e569dacd4de8f'}})
   return await response.json()
}