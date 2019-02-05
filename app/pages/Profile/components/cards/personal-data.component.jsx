import React from 'react';
import PropTypes from 'prop-types';
import { Card, List, Empty } from 'antd';

import Item from './data-item.component';

import './cards.less';

const PersonalDataCard = ({ personalDatum }) => (
  <div className="masonry-item">
    <div className="profile-card">
      <Card title="Dados Pessoais">
        {!personalDatum && <Empty description="Dados indisponíveis" />}
        {!!personalDatum && (
          <List itemLayout="horizontal">
            <Item title="Nome Completo" description={personalDatum.full_name} />
            <Item title="Nome Social" description={personalDatum.social_name} />
            <Item title="Sexo" description={personalDatum.gender} />
            <Item title="Cor da pele" description={personalDatum.skin_color} />
          </List>
        )}
      </Card>
    </div>
  </div>
);

PersonalDataCard.propTypes = {
  personalDatum: PropTypes.instanceOf(Object).isRequired
};

export default PersonalDataCard;
