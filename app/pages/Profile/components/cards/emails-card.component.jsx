import React from 'react';
import PropTypes from 'prop-types';
import { Card, List, Empty } from 'antd';

import './cards.less';

const { Item } = List;

const EmailsCardComponent = ({ datasource }) => (
  <div className="masonry-item">
    <div className="profile-card">
      <Card title="E-mails">
        {!datasource.length && <Empty description="Dados indisponíveis" />}
        {!!datasource.length && (
          <List
            dataSource={datasource}
            itemLayout="horizontal"
            renderItem={item => <Item>{item.address}</Item>}
          />
        )}
      </Card>
    </div>
  </div>
);

EmailsCardComponent.propTypes = {
  datasource: PropTypes.instanceOf(Array)
};

EmailsCardComponent.defaultProps = {
  datasource: []
};

export default EmailsCardComponent;
