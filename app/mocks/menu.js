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
  faLock
} from '@fortawesome/free-solid-svg-icons';

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
  faLock
);

export default [
  {
    code: '0',
    icon: 'home',
    name: 'Home',
    route: '/',
    permission: {
      action: 'view',
      resources: ['home']
    }
  },
  {
    code: '1',
    icon: 'tachometer-alt',
    name: 'Painel de Senhas',
    route: '/senhas',
    permission: {
      action: 'view',
      resources: ['senhas']
    }
  },
  {
    code: '2',
    icon: 'file-medical-alt',
    name: 'Prontuários',
    permission: {
      action: 'view',
      resources: ['prontuario']
    }
  },
  {
    code: '21',
    breadParentCode: '2',
    menuParentCode: '2',
    route: '/prontuario/prontuario-eletronico',
    icon: 'file-medical-alt',
    name: 'Prontuário Eletrônico',
    permission: {
      action: 'view',
      resources: ['prontuario']
    }
  },
  {
    code: '22',
    breadParentCode: '2',
    menuParentCode: '2',
    route: '/prontuario/docs',
    icon: 'file',
    name: 'Emissão de Documentos',
    permission: {
      action: 'view',
      resources: ['documentos']
    }
  },
  {
    code: '23',
    breadParentCode: '2',
    menuParentCode: '2',
    route: '/prontuario/evolucao',
    icon: 'heartbeat',
    name: 'Evolução',
    permission: {
      action: 'view',
      resources: ['evolucao']
    }
  },
  {
    code: '4',
    name: 'Agendamentos',
    icon: 'user-clock',
    permission: {
      action: 'view',
      resources: ['consultas', 'exames', 'cirurgias']
    }
  },
  {
    code: '41',
    breadParentCode: '4',
    menuParentCode: '4',
    name: 'Consultas',
    icon: 'notes-medical',
    route: '/marcacoes/consultas',
    permission: {
      action: 'view',
      resources: ['consultas']
    }
  },
  {
    code: '411',
    menuParentCode: '-1',
    breadParentCode: '41',
    name: 'Nova Consulta',
    route: '/marcacoes/consultas/novo'
  },
  {
    code: '42',
    breadParentCode: '4',
    menuParentCode: '4',
    name: 'Exames',
    icon: 'vials',
    route: '/marcacoes/exames',
    permission: {
      action: 'view',
      resources: ['exames']
    }
  },
  {
    code: '421',
    menuParentCode: '-1',
    breadParentCode: '44',
    name: 'Novo Exame',
    route: '/marcacoes/exames/criar'
  },
  {
    code: '43',
    breadParentCode: '4',
    menuParentCode: '4',
    name: 'Cirurgias',
    icon: 'cut',
    route: '/marcacoes/cirurgias',
    permission: {
      action: 'view',
      resources: ['cirurgias']
    }
  },
  {
    code: '431',
    menuParentCode: '-1',
    breadParentCode: '44',
    name: 'Nova Cirurgia',
    route: '/marcacoes/cirurgias/criar'
  },
  {
    code: '5',
    name: 'Cadastros',
    icon: 'keyboard',
    permission: {
      action: 'view',
      resources: [
        'cadastro-paciente',
        'cadastro-medico',
        'cadastro-tipo-cirurgia',
        'cadastro-especialidade',
        'cadastro-tipo-atendimento',
        'cadastro-tipo-exame'
      ]
    }
  },
  {
    code: '51',
    menuParentCode: '5',
    breadParentCode: '5',
    name: 'Paciente',
    icon: 'user-plus',
    route: '/cadastros/pacientes',
    permission: {
      action: 'view',
      resources: ['cadastro-paciente']
    }
  },
  {
    code: '512',
    menuParentCode: '-1',
    breadParentCode: '51',
    name: 'Cadastrar Paciente',
    route: '/cadastros/pacientes/novo'
  },
  {
    code: '52',
    menuParentCode: '5',
    breadParentCode: '5',
    name: 'Médico',
    icon: 'user-md',
    route: '/cadastros/medicos',
    permission: {
      action: 'view',
      resources: ['cadastro-medico']
    }
  },
  {
    code: '521',
    menuParentCode: '-1',
    breadParentCode: '52',
    name: 'Cadastrar Médico',
    route: '/cadastros/medicos/novo'
  },
  {
    code: '53',
    menuParentCode: '5',
    breadParentCode: '5',
    name: 'Especialidade',
    icon: 'address-card',
    route: '/cadastros/especialidade',
    permission: {
      action: 'view',
      resources: ['cadastro-especialidade']
    }
  },
  {
    code: '54',
    menuParentCode: '5',
    breadParentCode: '5',
    name: 'Tipo de Atendimento',
    icon: 'stethoscope',
    route: '/cadastros/tipo-atendimento',
    permission: {
      action: 'view',
      resources: ['cadastro-tipo-atendimento']
    }
  },
  {
    code: '55',
    menuParentCode: '5',
    breadParentCode: '5',
    name: 'Tipo de Exame',
    icon: 'syringe',
    route: '/cadastros/tipo-exame',
    permission: {
      action: 'view',
      resources: ['cadastro-tipo-exame']
    }
  },
  {
    code: '56',
    menuParentCode: '5',
    breadParentCode: '5',
    name: 'Perfis de Acesso',
    icon: 'lock',
    route: '/cadastros/perfis-acesso',
    permission: {
      action: 'view',
      resources: ['perfis-acesso']
    }
  }
];
