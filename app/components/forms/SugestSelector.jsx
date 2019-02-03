import React from 'react';
import _ from 'lodash';
import t from 'typy';

import { Select } from 'antd';

const { Option } = Select;

const filterSelectOptions = (input, option) => {
  const optionText = _.deburr(option.props.children.toLowerCase());
  const inputText = _.deburr(input.toLowerCase());

  return optionText.indexOf(inputText) >= 0;
};

// eslint-disable-next-line react/prefer-stateless-function
export default class SugestSelector extends React.Component {
  render() {
    return (
      <Select
        showSearch
        placeholder={this.props.placeholder}
        optionFilterProp="children"
        filterOption={filterSelectOptions}
        {...this.props}
      >
        {this.props.options.map((it) => {
          const { idName, valueName, labelName } = this.props;
          const id    = t(it, idName).safeObject;
          const value = t(it, valueName).safeObject;
          const label = t(it, labelName).safeObject;

          return (
            <Option key={id} value={value}>
              {label}
            </Option>
          );
        })}
      </Select>
    );
  }
}
