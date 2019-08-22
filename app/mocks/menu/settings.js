export const settingsMenus = [
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
    name            : 'Clínica',
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
  }
];
