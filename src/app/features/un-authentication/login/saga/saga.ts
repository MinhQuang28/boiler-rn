import { ApiConstants, NetWorkResponseType, NetWorkService } from '@networking';
import { onEndProcess, onStartProcess } from '@store/app-redux/reducer';
import { call, put } from '@typed-redux-saga';
import { Action } from 'redux';

import { actions } from '../redux/reducer';

export function* onLogin(action: Action) {
  if (actions.onLogin.match(action)) {
    // const { body } = action.payload;
    yield* put(onStartProcess());
    console.log(ApiConstants.LOGIN);

    const response = yield* call<NetWorkResponseType<unknown>>(
      NetWorkService.Get,
      {
        url: 'https://api.unsplash.com/photos/?client_id=F5223lQuu7LDrPNYx1g9h8_UlRw2SoSE65DtqTT7TJQ',
      },
    );
    yield* put(onEndProcess());
    if (response?.data) {
      /// TODO
      yield put(actions.onSuccess(response.data));
    }
  }
}
