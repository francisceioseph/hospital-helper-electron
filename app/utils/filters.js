import _ from 'lodash';

export const filterByText = (datasource = [], dataKey, inputText) => {
  if (!inputText) {
    return datasource;
  }

  return datasource.filter((item) => {
    const dItemText = _.deburr(item[dataKey]).toLowerCase();
    const dInputText = _.deburr(inputText).toLowerCase();

    return dItemText.indexOf(dInputText) >= 0;
  });
};
