// @flow

import * as React from 'react';

import { HomeShortcuts } from './home.shortcuts';

import { appointmentMenus } from '../../../mocks/menu/appointments';
import { prontuarioMenus } from '../../../mocks/menu/prontuario';
import { userMenus } from '../../../mocks/menu/users';
import { settingsMenus } from '../../../mocks/menu/settings';
import '../Home.scss';

const ShortcutList = () => (
  <div>
    <HomeShortcuts title="Agendamentos" menus={appointmentMenus} />
    <HomeShortcuts title="Prontuarios" menus={prontuarioMenus} />
    <HomeShortcuts title="Usuários" menus={userMenus} />
    <HomeShortcuts title="Configurações" menus={settingsMenus} />
  </div>
);

export default ShortcutList;
