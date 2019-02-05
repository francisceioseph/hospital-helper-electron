import React from 'react';
import PropTypes from 'prop-types';
import { Card, List, Empty } from 'antd';

import Item from './data-item.component';

import './cards.less';

const isDataAvailable = (personalDatum) => {
  const keys = ['rg', 'cpf', 'nis', 'cns', 'crm'];

  return keys.reduce((acc, key) => acc || !!personalDatum[key], false);
};

const DocumentationCard = ({ personalDatum }) => {
  const dataAvailable = isDataAvailable(personalDatum);

  return (
    <div className="masonry-item">
      <div className="profile-card">
        <Card title="Documentos">
          {!dataAvailable && <Empty description="Dados indisponíveis" />}
          {!!dataAvailable && (
            <List itemLayout="horizontal">
              <Item title="RG" description={personalDatum.rg} />
              <Item title="CPF" description={personalDatum.cpf} />
              <Item title="NIS" description={personalDatum.nis} />
              <Item title="CNS" description={personalDatum.cns} />
              <Item title="CRM" description={personalDatum.crm} />
            </List>
          )}
        </Card>
      </div>
    </div>
  );
};

DocumentationCard.propTypes = {
  personalDatum: PropTypes.instanceOf(Object).isRequired
};

export default DocumentationCard;
