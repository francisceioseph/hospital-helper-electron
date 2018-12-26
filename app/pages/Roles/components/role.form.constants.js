/* eslint-disable no-param-reassign */
import React from 'react';
import _ from 'lodash';

import { Checkbox } from 'antd';

const resources = [
  {
    label: 'Cadastro Especialidade',
    value: 'cadastro-especialidade'
  },
  {
    label: 'Cadastro Médico',
    value: 'cadastro-medico'
  },
  {
    label: 'Cadastro Paciente',
    value: 'cadastro-paciente'
  },
  {
    label: 'Cadastro Tipo Atendimento',
    value: 'cadastro-tipo-atendimento'
  },
  {
    label: 'Cadastro Tipo Cirurgia',
    value: 'cadastro-tipo-cirurgia'
  },
  {
    label: 'Cadastro Tipo Exame',
    value: 'cadastro-tipo-exame'
  },
  {
    label: 'Agenda de Cirurgias',
    value: 'cirurgias'
  },

  {
    label: 'Agenda de Consultas',
    value: 'consultas'
  },
  {
    label: 'Documentos',
    value: 'documentos'
  },
  {
    label: 'Evolução',
    value: 'evelocao'
  },
  {
    label: 'Agenda de Exames',
    value: 'exames'
  },
  {
    label: 'Página Inicial',
    value: 'home'
  },
  {
    label: 'Perfil',
    value: 'profile'
  },
  {
    label: 'Prontuário',
    value: 'prontuario'
  },
  {
    label: 'Senhas',
    value: 'senhas'
  }
];

export const getDefaultPermissions = () =>
  resources.map(r => ({
    resource_name: r.value,
    can_write: false,
    can_read: false,
    can_list: false,
    can_update: false,
    can_remove: false
  }));

export const LABELS = {
  USER_ROLE: 'Nome do Perfil de Usuário',
  USER_PERMISSIONS: 'Permissões de Acesso'
};

export const tableColumns = [
  {
    title: 'Módulo',
    dataIndex: 'resource_name',
    render: value => <span>{_.find(resources, { value }).label}</span>
  },
  {
    title: 'Listar',
    dataIndex: 'can_list',
    render: (text, record) => (
      <Checkbox
        defaultChecked={record.can_list}
        onChange={e => {
          e.stopPropagation();
          const { checked } = e.target;
          record.can_list = checked;
        }}
      />
    )
  },
  {
    title: 'Visualizar',
    dataIndex: 'can_read',
    render: (text, record) => (
      <Checkbox
        defaultChecked={record.can_read}
        onChange={e => {
          e.stopPropagation();
          const { checked } = e.target;
          record.can_read = checked;
        }}
      />
    )
  },
  {
    title: 'Criar',
    dataIndex: 'can_write',
    render: (text, record) => (
      <Checkbox
        defaultChecked={record.can_read}
        onChange={e => {
          e.stopPropagation();
          const { checked } = e.target;
          record.can_write = checked;
        }}
      />
    )
  },
  {
    title: 'Editar',
    dataIndex: 'can_update',
    render: (text, record) => (
      <Checkbox
        defaultChecked={record.can_update}
        onChange={e => {
          e.stopPropagation();
          const { checked } = e.target;
          record.can_update = checked;
        }}
      />
    )
  },
  {
    title: 'Remover',
    dataIndex: 'can_remove',
    render: (text, record) => (
      <Checkbox
        defaultChecked={record.can_remove}
        onChange={e => {
          e.stopPropagation();
          const { checked } = e.target;
          record.can_remove = checked;
        }}
      />
    )
  }
];
