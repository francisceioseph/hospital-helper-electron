// @flow

import * as React from 'react';

import { HomeShortcuts } from './home.shortcuts';

import { appointmentMenus } from '../../../mocks/menu/appointments';
import { userMenus } from '../../../mocks/menu/users';
import { settingsMenus } from '../../../mocks/menu/settings';
import { regulacaoMenus } from '../../../mocks/menu/regulacao';
import '../Home.scss';

const ShortcutList = () => (
  <div>
    <HomeShortcuts title="Agendamentos" menus={appointmentMenus} />
    <HomeShortcuts title="Regulação" menus={regulacaoMenus} />
    <HomeShortcuts title="Usuários" menus={userMenus} />
    <HomeShortcuts title="Configurações" menus={settingsMenus} />
  </div>
);

export default ShortcutList;
