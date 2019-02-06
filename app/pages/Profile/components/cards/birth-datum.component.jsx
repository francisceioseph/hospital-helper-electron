import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Card, List, Empty } from 'antd';

import Item from './data-item.component';
import { DATE_FORMAT_PT_BR } from '../../../../utils/date-format';

import './cards.less';

const BirthDataCard = ({ birthDatum }) => (
  <div className="masonry-item">
    <div className="profile-card">
      <Card title="Nascimento">
        {!birthDatum && <Empty description="Dados indisponíveis" />}
        {!!birthDatum && (
          <List itemLayout="horizontal">
            <Item title="Data do Nascimento" description={moment(birthDatum.date_of_birth).format(DATE_FORMAT_PT_BR)} />
            <Item title="Cidade" description={birthDatum.city_of_birth} />
            <Item title="Estado" description={birthDatum.state_of_birth} />
            <Item title="País" description={birthDatum.country_of_birth} />
          </List>
        )}
      </Card>
    </div>
  </div>
);

BirthDataCard.propTypes = {
  birthDatum: PropTypes.instanceOf(Object)
};

BirthDataCard.defaultProps = {
  birthDatum: undefined
};

export default BirthDataCard;
