import React from 'react';

import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { Alert } from 'antd';

import { setCredentials, setLoginError } from './login.actions';
import LoginForm from './components/login.form';
import * as WebAPI from '../../utils/webAPI';

import './login.scss';

const mapStateToProps = state => ({
  credentials: state.login.credentials,
  loginError: state.login.loginError
});

const mapDispatchToProps = {
  setCredentials,
  setLoginError
};

const withRedux = connect(
  mapStateToProps,
  mapDispatchToProps
);

const onSubmitHandler = ({
  setCredentials,
  setLoginError,
  history
}) => values => {
  return WebAPI.postLogin(values)
    .then(response => {
      const credentials = {
        token: response.headers.authorization,
        user: response.data
      };

      setCredentials(credentials);
      history.push('/');
    })
    .catch(error => {
      setLoginError(error || { error: true });
    });
};

const withLoginHandlers = withHandlers({
  onSubmitHandler: onSubmitHandler
});

const LoginContainer = props => (
  <React.Fragment>
    <div className="form">
      <div className="logo">
        <span>Login</span>
      </div>
      <LoginForm onSubmitHandler={props.onSubmitHandler} />
      {!!props.loginError && (
        <Alert
          type="error"
          message="Login failed. Check yor your username/password"
          banner
        />
      )}
    </div>
  </React.Fragment>
);

const LoginPageWrapper = compose(withLoginHandlers)(LoginContainer);

export default withRedux(LoginPageWrapper);
