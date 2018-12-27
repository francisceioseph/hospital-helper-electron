import React from 'react';
import PropTypes from 'prop-types';

import { lifecycle, compose, withHandlers } from 'recompose';

import { tableColumns } from './role.list.constants';
import { TableList } from '../../../components/TableList';

const RoleListComponent = props => (
  <TableList
    buttonName="Novo Perfil de Acesso"
    columns={tableColumns}
    datasource={props.roles}
    onButtonClick={props.onNewRoleClick}
    onSearch={props.onSearch}
    idAccessor="user_profile_id"
  />
);

RoleListComponent.propTypes = {
  roles: PropTypes.instanceOf(Array).isRequired,
  onNewRoleClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

const withListHandlers = withHandlers({
  onNewRoleClick: props => event => {
    event.stopPropagation();
    props.history.push('/configuracoes/perfis-acesso/novo');
  },
  onSearch: () => () => {},
});

const listLifecycle = lifecycle({
  componentDidMount() {
    this.props.getRoles();
  },
});

export default compose(
  withListHandlers,
  listLifecycle
)(RoleListComponent);
