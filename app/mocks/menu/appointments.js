export const appointmentMenus = [
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
    breadParentCode : '42',
    name            : 'Novo Exame',
    route           : '/marcacoes/exames/novo'
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
    breadParentCode : '43',
    name            : 'Nova Cirurgia',
    route           : '/marcacoes/cirurgias/novo'
  }
];
