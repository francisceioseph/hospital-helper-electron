import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTachometerAlt,
  faAddressBook,
  faNotesMedical,
  faPrescriptionBottle,
  faPlus,
  faKeyboard,
  faUserPlus,
  faUserMd,
  faFileMedicalAlt,
  faUserClock,
  faCogs,
  faCut,
  faUserSecret,
  faHospital,
  faVials,
  faHeartbeat,
  faFile,
  faHome,
  faCog,
  faAddressCard,
  faStethoscope,
  faSyringe,
  faLock,
  faScrewdriver,
  faUserLock,
  faUser
} from '@fortawesome/free-solid-svg-icons';

import { prontuarioMenus } from './prontuario';
import { appointmentMenus } from './appointments';
import { userMenus } from './users';
import { settingsMenus } from './settings';
import { securityMenus } from './security';

library.add(
  faTachometerAlt,
  faAddressBook,
  faNotesMedical,
  faPrescriptionBottle,
  faKeyboard,
  faUserPlus,
  faUserMd,
  faFileMedicalAlt,
  faPlus,
  faUserClock,
  faCogs,
  faCut,
  faUserSecret,
  faHospital,
  faHeartbeat,
  faVials,
  faNotesMedical,
  faPrescriptionBottle,
  faFile,
  faHeartbeat,
  faHome,
  faCog,
  faAddressCard,
  faStethoscope,
  faSyringe,
  faLock,
  faScrewdriver,
  faUserLock,
  faUser
);

export default [
  {
    code       : '0',
    icon       : 'home',
    name       : 'Início',
    route      : '/',
    permission : {
      action    : 'view',
      resources : ['home']
    }
  },
  {
    code       : '1',
    icon       : 'tachometer-alt',
    name       : 'Painel de Senhas',
    route      : '/senhas',
    permission : {
      action    : 'view',
      resources : ['senhas']
    }
  },
  ...prontuarioMenus,
  ...appointmentMenus,
  ...userMenus,
  ...settingsMenus,
  ...securityMenus
];
