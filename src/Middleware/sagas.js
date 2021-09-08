import { put, takeEvery } from "redux-saga/effects";
import { deleteChatAction } from "../Store/Chats/actions";

function* deleteChatWithSaga(action) {
  try {
    yield put(deleteChatAction(action.payload));
  } catch {
    //error
  }
}

function* mySaga() {
  yield takeEvery("CHATS::DELETE_CHAT_WITH_SAGA", deleteChatWithSaga);
}

export default mySaga;
