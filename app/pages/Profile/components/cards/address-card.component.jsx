import React from 'react';
import PropTypes from 'prop-types';
import { Card, List, Empty } from 'antd';

import './cards.less';

const { Item } = List;

const AddressCardComponent = ({ datasource }) => (
  <div className="masonry-item">
    <div className="profile-card">
      <Card title="Endereços">
        {!datasource.length && <Empty description="Dados indisponíveis" />}
        {!!datasource.length && (
          <List
            dataSource={datasource}
            itemLayout="horizontal"
            renderItem={it => (
              <Item>
                <p>{`${it.street_name}, ${it.house_number} ${it.neighborhood}`}</p>
                <p>{`${it.city} - ${it.state} - ${it.country}`}</p>
                <p>{`${it.zipcode}`}</p>
              </Item>
            )}
          />
        )}
      </Card>
    </div>
  </div>
);

AddressCardComponent.propTypes = {
  datasource: PropTypes.instanceOf(Array)
};

AddressCardComponent.defaultProps = {
  datasource: []
};

export default AddressCardComponent;
