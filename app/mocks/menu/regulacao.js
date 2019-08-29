export const regulacaoMenus = [
  {
    code : '9',
    name : 'Regulação',
    icon : 'clipboard',
  },
  {
    code            : '90',
    breadParentCode : '9',
    menuParentCode  : '9',
    name            : 'Internações',
    icon            : 'procedures',
    route           : '/regulacao/inernacoes',
    permission      : {
      action    : 'view',
      resources : ['internacoes']
    }
  },
  {
    code            : '91',
    breadParentCode : '9',
    menuParentCode  : '9',
    name            : 'Censo Diário',
    icon            : 'calculator',
    route           : '/regulacao/censo',
    permission      : {
      action    : 'view',
      resources : ['censo']
    }
  },
  {
    code            : '92',
    breadParentCode : '9',
    menuParentCode  : '9',
    name            : 'Controle Transferências',
    icon            : 'exchange-alt',
    route           : '/regulacao/transferencias',
    permission      : {
      action    : 'view',
      resources : ['censo']
    }
  },
];
