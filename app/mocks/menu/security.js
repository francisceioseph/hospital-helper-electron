export const securityMenus = [
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
