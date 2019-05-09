// @flow
import * as React from 'react';
import { lifecycle, compose, withHandlers } from 'recompose';

import { tableColumns } from './doctor.list.constants';
import { TableList } from '../../../components/TableList';
import { DoctorModalFormContainer } from '../../../containers/Doctor';

import * as WebAPI from '../../../utils/api.service';

type Props = {
  doctors: Array<Object>,
  onSearch: Function,
  onNewDoctorClick: Function,
  showModal: boolean,
  hideEditDoctorModal: Function
};

const onDoctorSearchHandler = (props: Props) => (text: string) => props.filterByName(text);
const hideEditDoctorModal = (props: Props) => () => props.hideEditDoctorModal();
const onDoctorClickHandler = (props: Props) => (event) => {
  event.stopPropagation();
  props.history.push('/usuarios/medicos/novo');
};

const withListHandlers = withHandlers({
  onNewDoctorClick : onDoctorClickHandler,
  onSearch         : onDoctorSearchHandler,
  hideEditDoctorModal
});

const listLifecycle = lifecycle({
  async componentDidMount() {
    this.props.showPageLoader();

    try {
      const response = await WebAPI.getDoctors();
      this.props.getDoctors(response);
      this.props.hidePageLoader();
    } catch (error) {
      this.props.hidePageLoader();
    }
  }
});

const DoctorListComponent = (props: Props) => (
  <div>
    <TableList
      buttonName="Novo Médico"
      columns={tableColumns}
      datasource={props.doctors}
      onSearch={props.onSearch}
      onButtonClick={props.onNewDoctorClick}
      idAccessor="id"
    />

    <DoctorModalFormContainer
      titleText="Editar Médico"
      mode="edit"
      visible={props.showModal}
      onCancel={props.hideEditDoctorModal}
      onSubmitSuccess={props.hideEditDoctorModal}
    />
  </div>
);

export default compose(
  withListHandlers,
  listLifecycle
)(DoctorListComponent);
