import React from 'react';

import { dateFormat } from '../../utils';
import { PacientListActionsContainer } from '../../containers/Pacient';

export const tableColumns = [
  {
    title     : 'Nome',
    dataIndex : 'personal_datum.full_name',
    key       : 'full_name'
  },
  {
    title     : 'CNS',
    dataIndex : 'personal_datum.cns',
    key       : 'cns'
  },
  {
    title     : 'Nome da Mãe',
    dataIndex : 'family_datum.mother_name',
    key       : 'mother_name'
  },
  {
    title     : 'Data Nasc.',
    dataIndex : 'personal_datum.birth_datum.date_of_birth',
    key       : 'date_of_birth',
    render    : text => dateFormat(text)
  },
  {
    title     : 'Município',
    dataIndex : 'addresses[0].city',
    key       : 'current_city'
  },
  {
    title  : 'Ações',
    key    : 'actions',
    render : (text, record) => <PacientListActionsContainer record={record} />
  }
];
