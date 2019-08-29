import React from 'react';
import { dateFormat } from '../../utils';

export const tableColumns = [
  {
    title     : 'Leito',
    dataIndex : 'bed.name',
    key       : 'bed_name'
  },
  {
    title     : 'Nome Paciente',
    dataIndex : 'pacient.personal_datum.full_name',
    key       : 'pacient_name'
  },
  {
    title     : 'Diagnóstico',
    dataIndex : 'diagnosis',
    key       : 'diagnosis'
  },
  {
    title     : 'Admissão',
    dataIndex : 'admission',
    key       : 'admission',
    render    : text => dateFormat(text)
  },
  {
    title     : 'Dias Permanencia',
    dataIndex : 'hospitalized_days',
    key       : 'hospitalized_days'
  },
  {
    title     : 'Previsão Alta',
    dataIndex : 'intended_release_date',
    key       : 'intended_release_date'
  },
  {
    title  : 'Ações',
    key    : 'actions',
    render : (text, record) => <div>Edit</div>
  }
];
