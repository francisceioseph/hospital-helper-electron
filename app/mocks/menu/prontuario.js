export const prontuarioMenus = [
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
  }
];
