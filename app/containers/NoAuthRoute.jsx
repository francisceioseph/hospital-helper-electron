import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PageLayout } from './layouts';

const mapStateToProps = ({ login }) => ({
  authenticated: !!login.userCredentials.token
});

const mapDispatchToProps = {};

const NoAuthRoute = ({ authenticated, ...props }) => (
  <React.Fragment>
    {authenticated ? (
      <Redirect
        to={{
          pathname: '/prontuarios',
          state: { from: props.location }
        }}
      />
    ) : (
      <PageLayout {...props} />
    )}
  </React.Fragment>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoAuthRoute);
