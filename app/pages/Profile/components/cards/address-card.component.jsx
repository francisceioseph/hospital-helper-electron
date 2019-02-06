import React from 'react';
import PropTypes from 'prop-types';
import { Card, List, Empty } from 'antd';

import { getLine1, getLine2, getLine3 } from '../../../../utils';
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
                <p>{getLine1(it)}</p>
                <p>{getLine2(it)}</p>
                <p>{getLine3(it)}</p>
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
