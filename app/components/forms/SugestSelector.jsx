import React from 'react';
import _ from 'lodash';
import { Select } from 'antd';

const { Option } = Select;

const filterSelectOptions = (input, option) => {
  const optionText = _.deburr(option.props.children.toLowerCase());
  const inputText = _.deburr(input.toLowerCase());

  return optionText.indexOf(inputText) >= 0;
};

class SugestSelector extends React.Component {
  render() {
    return (
      <Select
        showSearch
        placeholder={this.props.placeholder}
        optionFilterProp="children"
        filterOption={filterSelectOptions}
        {...this.props}
      >
        {this.props.options.map((it, idx) => (
          <Option key={it[this.props.idName]} value={it[this.props.valueName]}>
            {it[this.props.labelName]}
          </Option>
        ))}
      </Select>
    );
  }
}

export default SugestSelector;
