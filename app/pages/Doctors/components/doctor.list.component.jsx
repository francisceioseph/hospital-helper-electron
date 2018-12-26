import React from 'react';
import PropTypes from 'prop-types';

import { lifecycle, compose, withHandlers } from 'recompose';

import { tableColumns } from './doctor.list.constants';
import { TableList } from '../../../components/TableList';

const DoctorListComponent = props => (
  <TableList
    buttonName="Novo Médico"
    columns={tableColumns}
    datasource={props.doctors}
    onButtonClick={props.onNewDoctorClick}
    idAccessor="user_profile_id"
  />
);

DoctorListComponent.propTypes = {
  doctors: PropTypes.instanceOf(Array).isRequired,
  onNewDoctorClick: PropTypes.func.isRequired
};

const withListHandlers = withHandlers({
  onNewDoctorClick: props => event => {
    event.stopPropagation();
    props.history.push('/cadastros/medicos/novo');
  }
});

const listLifecycle = lifecycle({
  componentDidMount() {
    this.props.getDoctors();
  }
});

export default compose(
  withListHandlers,
  listLifecycle
)(DoctorListComponent);
