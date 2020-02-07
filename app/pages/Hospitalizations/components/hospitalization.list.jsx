// @flow
import * as React from 'react';
import {
  Row, Input, Divider, Table, Button, Col
} from 'antd';
import { compose, lifecycle, withHandlers } from 'recompose';

import { tableColumns } from '../hospitalizations.constants';
// import { PacientModalFormContainer } from '../../../containers/Pacient';

// import * as ipcService from '../../../utils/ipc.service';

type Props = {
//   showPacientEditModal: boolean,
//   pacients: Array<Object>,
  handleOnSearch: Function,
  onNewHospitalizationClick: Function,
//   hideEditPacientModal: Function
};

const withLifecycle = lifecycle({
  async componentDidMount() {
    // this.props.showPageLoader();
    // try {
    //   const response = await ipcService.getPacients();
    //   console.log(response);
    //   this.props.getPacients(response);
    //   this.props.hidePageLoader();
    // } catch (error) {
    //   this.props.hidePageLoader();
    // }
  }
});

const onNewHospitalizationClick = (props: Props) => () => alert('not yet implemented...');
const handleOnSearch = (props: Props) => text => props.filterByName(text);

const hideEditPacientModal = (props: Props) => () => {
  props.hideEditModal();
};

const withListHandlers = withHandlers({
  onNewHospitalizationClick,
  handleOnSearch,
  hideEditPacientModal
});

const PacientListComponent = (props: Props) => (
  <div>
    <Row type="flex" justify="space-between">
      <Col>
        <Input.Search placeholder="Pesquisar" style={{ width: 200 }} onSearch={props.handleOnSearch} />
      </Col>
      <Col>
        <Button type="primary" onClick={props.onNewHospitalizationClick}>
          Internar Paciente
        </Button>
      </Col>
    </Row>

    <Divider />

    <Row>
      <Table
        size="middle"
        columns={tableColumns}
        dataSource={[]}
        rowKey={it => it.id}
        pagination={{ pageSize: 8 }}
      />
    </Row>

    {/* <PacientModalFormContainer
      titleText="Editar Paciente"
      mode="edit"
      visible={props.showPacientEditModal}
      onCancel={props.hideEditPacientModal}
      onSubmitSuccess={props.hideEditPacientModal}
    /> */}
  </div>
);

export default compose(
  withLifecycle,
  withListHandlers
)(PacientListComponent);
