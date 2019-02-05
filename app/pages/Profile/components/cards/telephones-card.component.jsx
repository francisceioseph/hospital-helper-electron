import React from 'react';
import PropTypes from 'prop-types';
import { Card, List, Empty } from 'antd';

import './cards.less';

const { Item } = List;

const TelephonesCardComponent = ({ datasource }) => (
  <div className="masonry-item">
    <div className="profile-card">
      <Card title="Telefones">
        {!datasource.length && <Empty description="Dados indisponíveis" />}
        {!!datasource.length && (
          <List
            dataSource={datasource}
            itemLayout="horizontal"
            renderItem={item => (
              <Item>
                <p>{item.number}</p>
                {item.contact_person && <p>{item.contact_person}</p>}
              </Item>
            )}
          />
        )}
      </Card>
    </div>
  </div>
);

TelephonesCardComponent.propTypes = {
  datasource: PropTypes.instanceOf(Array)
};

TelephonesCardComponent.defaultProps = {
  datasource: []
};

export default TelephonesCardComponent;
