import React, { memo, useCallback } from 'react';

import isEqual from 'react-fast-compare';

import { dispatch, useSelector } from '@common';
import { Block, FAB, Screen, Wallpaper } from '@components';
// import { onSetAppTheme } from '@store/app-redux/reducer';

import { FormLogin } from './components/form-login';

import { actions } from '../redux/reducer';

const LoginComponent = () => {
  // state

  // function
  const onSubmit = useCallback(() => {
    dispatch(actions.onLogin());
    // Alert.alert(JSON.stringify(data));
  }, []);

  const dataLogin = useSelector(x => x.login);
  console.log('datalogin', dataLogin.data);
  // render
  return (
    <Block block paddingTop={0} paddingHorizontal={15}>
      <Wallpaper />

      <Screen
        scroll
        style={{ paddingVertical: 0, paddingHorizontal: 10 }}
        backgroundColor={'transparent'}>
        <FormLogin onSubmit={onSubmit} />
      </Screen>
      <FAB
        label="Float"
        type={'group'}
        actions={[
          { icon: 'home', label: 'Icon1' },
          { icon: 'search', label: 'Icon2' },
          { icon: 'send', label: 'Icon3' },
        ]}
      />
    </Block>
  );
};
export const Login = memo(LoginComponent, isEqual);
