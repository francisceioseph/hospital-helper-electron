import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';

const { Item } = List;
const { Meta } = Item;

const renderTitle = title => <strong>{title}</strong>;

const DataItemComponent = ({ title, description }) => (
  <React.Fragment>
    {!!description && (
      <Item>
        <Meta title={renderTitle(title)} description={description} />
      </Item>
    )}
  </React.Fragment>
);

DataItemComponent.propTypes = {
  title       : PropTypes.string.isRequired,
  description : PropTypes.string
};

DataItemComponent.defaultProps = {
  description: ''
};

export default DataItemComponent;
