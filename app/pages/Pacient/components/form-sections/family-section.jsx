import React, { Fragment } from 'react';
import { Form, Divider } from 'antd';

import { LABELS } from '../pacient.form.constants';
import { FORM_ITEM_LAYOUT } from '../../../../components/forms';

import * as entries from '../pacient.form.entries';

const { Item: FormItem } = Form;

// mother_name
// father_name
// is_family_head

const FamilyFragment = (props) => {
  const { decoratorManager } = props;

  return (
    <Fragment>
      <FormItem label={LABELS.MOTHER_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.motherNameDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.FATHER_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.fatherNameDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.FAMILY_HOLDER} {...FORM_ITEM_LAYOUT}>
        {decoratorManager.familyHolderDecorator(entries.getYesNoRadio())}
      </FormItem>
    </Fragment>
  );
};

export default FamilyFragment;