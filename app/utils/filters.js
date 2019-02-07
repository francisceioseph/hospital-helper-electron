import _ from 'lodash';
import t from 'typy';

export const filterByText = (datasource = [], dataKey, inputText) => {
  if (!inputText) {
    return datasource;
  }

  return datasource.filter((item) => {
    const dItemText = _.deburr(t(item, dataKey).safeString).toLowerCase();
    const dInputText = _.deburr(inputText).toLowerCase();

    return dItemText.indexOf(dInputText) >= 0;
  });
};
