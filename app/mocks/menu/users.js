export const userMenus = [
  {
    code       : '5',
    name       : 'Usuários',
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
  }
];
