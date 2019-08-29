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
  faUser,
  faExchangeAlt,
  faClipboard,
  faCalculator,
  faProcedures
} from '@fortawesome/free-solid-svg-icons';

import { appointmentMenus } from './appointments';
import { userMenus } from './users';
import { settingsMenus } from './settings';
import { regulacaoMenus } from './regulacao';

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
  faUser,
  faExchangeAlt,
  faClipboard,
  faCalculator,
  faProcedures
);

export default [
  {
    code       : '0',
    icon       : 'home',
    name       : 'Ações Disponíveis',
    route      : '/',
    permission : {
      action    : 'view',
      resources : ['home']
    }
  },
  {
    code       : '1',
    route      : '/prontuario-eletronico',
    icon       : 'file-medical-alt',
    name       : 'Prontuário Eletrônico',
    permission : {
      action: 'view',
    }
  },
  ...regulacaoMenus,
  ...appointmentMenus,
  ...userMenus,
  ...settingsMenus,
];
