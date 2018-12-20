import { Modal } from 'antd';

export const success = props => {
  Modal.success({
    title: 'Sucesso',
    content: 'Operação realizada com sucesso',
    okText: 'Fechar',
    ...props
  });
};

export const confirm = props => {
  Modal.confirm({
    title: 'Atenção',
    okText: 'OK',
    cancelText: 'Cancelar',
    ...props
  });
};

export const error = props => {
  Modal.error({
    title: 'Erro',
    content: 'Um erro aconteceu. Por favor, repita esta operação mais tarde',
    okText: 'Fechar',
    ...props
  });
};
