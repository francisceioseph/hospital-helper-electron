import React, { Fragment } from 'react';
import { Form } from 'antd';

import { LABELS } from '../pacient.form.constants';
import { FORM_ITEM_LAYOUT } from '../../../../components/forms';

import * as entries from '../pacient.form.entries';

const { Item: FormItem } = Form;

const IdentificationFragment = (props) => {
  const { decoratorManager } = props;
  return (
    <Fragment>
      <FormItem label={LABELS.NOME_COMPLETO} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.fullNameDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.SOCIAL_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.socialNameDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.MOTHER_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.motherNameDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.FATHER_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.fatherNameDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.RG} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.rgDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.CPF} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.cpfDecorator(entries.getCpfField())}
      </FormItem>
      <FormItem label={LABELS.CNS} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.cnsDecorator(entries.getCnsField())}
      </FormItem>
      <FormItem label={LABELS.GENDER} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.genderDecorator(entries.getGenderField())}
      </FormItem>
      <FormItem label={LABELS.SKIN_COLOR} {...FORM_ITEM_LAYOUT}>
        {decoratorManager.skinColorDecorator(entries.getSkinColorField())}
      </FormItem>
      <FormItem label={LABELS.NIS_NUMBER} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.nisNumberDecorator(entries.getInputField())}
      </FormItem>
    </Fragment>
  );
};

export default IdentificationFragment;