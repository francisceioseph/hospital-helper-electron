export const HORIZONTAL_FORM_LAYOUT = 'horizontal';
export const DATE_FORMAT_PT_BR = 'DD/MM/YYYY hh:mm';
export const SIMPLE_DATE_FORMAT_PT_BR = 'DD/MM/YYYY';
export const FORM_ITEM_LAYOUT = {
  labelCol   : { span: 7 },
  wrapperCol : { span: 14 },
  colon      : false,
};

export const FORM_ITEM_LAYOUT_2 = {
  wrapperCol: { offset: 5, span: 16 }
};

export const FORM_ITEM_SUBMIT_LAYOUT = {
  ...FORM_ITEM_LAYOUT,
  label : ' ',
  colon : false,
  style : { textAlign: 'right' }
};
