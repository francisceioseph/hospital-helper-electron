// @flow

import * as React from 'react';

import { HomeShortcuts } from './home.shortcuts';

import { appointmentMenus } from '../../../mocks/menu/appointments';
import { prontuarioMenus } from '../../../mocks/menu/prontuario';
import { userMenus } from '../../../mocks/menu/users';
import { settingsMenus } from '../../../mocks/menu/settings';
import '../Home.scss';

type Props = {
  permissions: Array<Object>
};

const ShortcutList = (props: Props) => (
  <div>
    <h2> Ações Disponíveis </h2>
    <HomeShortcuts title="Agendamentos" menus={appointmentMenus} permissions={props.permissions} />
    <HomeShortcuts title="Prontuarios" menus={prontuarioMenus} permissions={props.permissions} />
    <HomeShortcuts title="Usuários" menus={userMenus} permissions={props.permissions} />
    <HomeShortcuts title="Configurações" menus={settingsMenus} permissions={props.permissions} />
  </div>
);

export default ShortcutList;
