import React from 'react';
import PropTypes from 'prop-types';

import { lifecycle, compose, withHandlers } from 'recompose';

import { tableColumns } from './doctor.list.constants';
import { TableList } from '../../../components/TableList';
import * as WebAPI from '../../../utils/webAPI';

const DoctorListComponent = props => (
  <TableList
    buttonName="Novo Médico"
    columns={tableColumns}
    datasource={props.doctors}
    onButtonClick={props.onNewDoctorClick}
    idAccessor="id"
  />
);

DoctorListComponent.propTypes = {
  doctors: PropTypes.instanceOf(Array).isRequired,
  onNewDoctorClick: PropTypes.func.isRequired
};

const withListHandlers = withHandlers({
  onNewDoctorClick: props => event => {
    event.stopPropagation();
    props.history.push('/usuarios/medicos/novo');
  }
});

const listLifecycle = lifecycle({
  async componentDidMount() {
    this.props.showPageLoader();

    try {
      const response = await WebAPI.getDoctors();
      this.props.getDoctors(respose);
      this.props.hidePageLoader();
    } catch (error) {
      console.log(error);
      this.props.hidePageLoader();
    }
  }
});

export default compose(
  withListHandlers,
  listLifecycle
)(DoctorListComponent);
