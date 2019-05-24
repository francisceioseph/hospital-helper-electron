import React from 'react';

import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { Alert } from 'antd';

import { setCredentials, setLoginError } from './login.actions';
import { showPageLoader, hidePageLoader } from '../../containers/layouts/actions';
import LoginForm from './components/login.form';
import * as WebAPI from '../../utils/api.service';

import './login.scss';

const mapStateToProps = state => ({
  credentials : state.login.credentials,
  loginError  : state.login.loginError
});

const mapDispatchToProps = {
  setCredentials,
  setLoginError,
  showPageLoader,
  hidePageLoader
};

const withRedux = connect(
  mapStateToProps,
  mapDispatchToProps
);

const onSubmitHandler = props => async (values) => {
  props.showPageLoader();

  try {
    const response = await WebAPI.postLogin(values);
    const credentials = {
      token : response.headers.authorization,
      user  : response.data
    };

    props.setCredentials(credentials);
    props.history.push('/');
  } catch (error) {
    props.setLoginError(error || { error: true });
  } finally {
    props.hidePageLoader();
  }
};

const withLoginHandlers = withHandlers({
  onSubmitHandler
});

const LoginContainer = props => (
  <React.Fragment>
    <div className="form">
      <div className="logo">
        <span>Entrar no sistema</span>
      </div>
      <LoginForm onSubmitHandler={props.onSubmitHandler} />
      {!!props.loginError && <Alert type="error" message="Login failed. Check yor your username/password" banner />}
    </div>
  </React.Fragment>
);

const LoginPageWrapper = compose(withLoginHandlers)(LoginContainer);

export default withRedux(LoginPageWrapper);
