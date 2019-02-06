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
    code       : '8',
    name       : 'Perfil',
    icon       : 'user',
    route      : '/profile',
    permission : {
      action    : 'view',
      resources : ['profile']
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
  {
    code       : '2',
    icon       : 'file-medical-alt',
    name       : 'Prontuários',
    permission : {
      action    : 'view',
      resources : ['prontuario']
    }
  },
  {
    code            : '21',
    breadParentCode : '2',
    menuParentCode  : '2',
    route           : '/prontuario/prontuario-eletronico',
    icon            : 'file-medical-alt',
    name            : 'Prontuário Eletrônico',
    permission      : {
      action    : 'view',
      resources : ['prontuario']
    }
  },
  {
    code            : '22',
    breadParentCode : '2',
    menuParentCode  : '2',
    route           : '/prontuario/docs',
    icon            : 'file',
    name            : 'Emissão de Documentos',
    permission      : {
      action    : 'view',
      resources : ['documentos']
    }
  },
  {
    code            : '23',
    breadParentCode : '2',
    menuParentCode  : '2',
    route           : '/prontuario/evolucao',
    icon            : 'heartbeat',
    name            : 'Evolução',
    permission      : {
      action    : 'view',
      resources : ['evolucao']
    }
  },
  {
    code       : '4',
    name       : 'Agendamentos',
    icon       : 'user-clock',
    permission : {
      action    : 'view',
      resources : ['consultas', 'exames', 'cirurgias']
    }
  },
  {
    code            : '41',
    breadParentCode : '4',
    menuParentCode  : '4',
    name            : 'Consultas',
    icon            : 'notes-medical',
    route           : '/marcacoes/consultas',
    permission      : {
      action    : 'view',
      resources : ['consultas']
    }
  },
  {
    code            : '411',
    menuParentCode  : '-1',
    breadParentCode : '41',
    name            : 'Nova Consulta',
    route           : '/marcacoes/consultas/novo'
  },
  {
    code            : '42',
    breadParentCode : '4',
    menuParentCode  : '4',
    name            : 'Exames',
    icon            : 'vials',
    route           : '/marcacoes/exames',
    permission      : {
      action    : 'view',
      resources : ['exames']
    }
  },
  {
    code            : '421',
    menuParentCode  : '-1',
    breadParentCode : '44',
    name            : 'Novo Exame',
    route           : '/marcacoes/exames/criar'
  },
  {
    code            : '43',
    breadParentCode : '4',
    menuParentCode  : '4',
    name            : 'Cirurgias',
    icon            : 'cut',
    route           : '/marcacoes/cirurgias',
    permission      : {
      action    : 'view',
      resources : ['cirurgias']
    }
  },
  {
    code            : '431',
    menuParentCode  : '-1',
    breadParentCode : '44',
    name            : 'Nova Cirurgia',
    route           : '/marcacoes/cirurgias/criar'
  },
  {
    code       : '5',
    name       : 'Cadastros',
    icon       : 'keyboard',
    permission : {
      action    : 'view',
      resources : [
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
    code            : '51',
    menuParentCode  : '5',
    breadParentCode : '5',
    name            : 'Pacientes',
    icon            : 'user-plus',
    route           : '/usuarios/pacientes',
    permission      : {
      action    : 'view',
      resources : ['cadastro-paciente']
    }
  },
  {
    code            : '512',
    menuParentCode  : '-1',
    breadParentCode : '51',
    name            : 'Cadastrar Paciente',
    route           : '/usuarios/pacientes/novo'
  },
  {
    code            : '52',
    menuParentCode  : '5',
    breadParentCode : '5',
    name            : 'Médicos',
    icon            : 'user-md',
    route           : '/usuarios/medicos',
    permission      : {
      action    : 'view',
      resources : ['cadastro-medico']
    }
  },
  {
    code            : '521',
    menuParentCode  : '-1',
    breadParentCode : '52',
    name            : 'Cadastrar Médico',
    route           : '/usuarios/medicos/novo'
  },
  {
    code       : '6',
    name       : 'Configurações',
    icon       : 'cog',
    permission : {
      action    : 'view',
      resources : [
        'cadastro-especialidade',
        'cadastro-tipo-cirurgia',
        'cadastro-tipo-atendimento',
        'cadastro-tipo-exame',
        'cadastro-tipo-cirurgia'
      ]
    }
  },
  {
    code            : '61',
    menuParentCode  : '6',
    breadParentCode : '6',
    name            : 'Especialidade',
    icon            : 'address-card',
    route           : '/configuracoes/especialidade',
    permission      : {
      action    : 'view',
      resources : ['cadastro-especialidade']
    }
  },
  {
    code            : '62',
    menuParentCode  : '6',
    breadParentCode : '6',
    name            : 'Tipo de Atendimento',
    icon            : 'stethoscope',
    route           : '/configuracoes/tipo-atendimento',
    permission      : {
      action    : 'view',
      resources : ['cadastro-tipo-atendimento']
    }
  },
  {
    code            : '63',
    menuParentCode  : '6',
    breadParentCode : '6',
    name            : 'Tipo de Exame',
    icon            : 'syringe',
    route           : '/configuracoes/tipo-exame',
    permission      : {
      action    : 'view',
      resources : ['cadastro-tipo-exame']
    }
  },
  {
    code            : '64',
    menuParentCode  : '6',
    breadParentCode : '6',
    name            : 'Tipo de Cirurgia',
    icon            : 'cut',
    route           : '/configuracoes/tipo-cirurgia',
    permission      : {
      action    : 'view',
      resources : ['cadastro-tipo-cirurgia']
    }
  },
  {
    code       : '7',
    name       : 'Segurança',
    icon       : 'lock',
    permission : {
      action    : 'view',
      resources : ['perfis-acesso']
    }
  },
  {
    code            : '71',
    menuParentCode  : '7',
    breadParentCode : '7',
    name            : 'Perfis de Acesso',
    icon            : 'user-lock',
    route           : '/configuracoes/perfis-acesso',
    permission      : {
      action    : 'view',
      resources : ['perfis-acesso']
    }
  },
  {
    code            : '711',
    menuParentCode  : '-1',
    breadParentCode : '71',
    name            : 'Cadastrar Perfil de Acesso',
    route           : '/configuracoes/perfis-acesso/novo'
  }
];
