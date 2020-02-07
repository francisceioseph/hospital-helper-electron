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
    name            : 'Transferências',
    icon            : 'exchange-alt',
    route           : '/regulacao/transferencias',
    permission      : {
      action    : 'view',
      resources : ['censo']
    }
  },
];
