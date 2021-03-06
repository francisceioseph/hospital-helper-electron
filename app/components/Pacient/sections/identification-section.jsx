import React, { Fragment } from 'react';
import { Form, Divider } from 'antd';

import * as entries from '../form/pacient.form.entries';

import { LABELS } from '../form/pacient.form.constants';
import { FORM_ITEM_LAYOUT } from '../../forms';

const { Item: FormItem } = Form;

const IdentificationFragment = (props) => {
  const { decoratorManager } = props;
  return (
    <Fragment>
      <Divider orientation="left">Identificação</Divider>
      <FormItem label={LABELS.NOME_COMPLETO} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.fullNameDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.CNS} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.cnsDecorator(entries.getCnsField())}
      </FormItem>
      <FormItem label={LABELS.MOTHER_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.motherNameDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.FATHER_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.fatherNameDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.GENDER} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.genderDecorator(entries.getGenderField())}
      </FormItem>

      <Divider orientation="left">Documentação</Divider>
      <FormItem label={LABELS.RG} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.rgDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.CPF} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.cpfDecorator(entries.getCpfField())}
      </FormItem>
      <FormItem label={LABELS.NIS_NUMBER} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.nisNumberDecorator(entries.getNisField())}
      </FormItem>
    </Fragment>
  );
};

export default IdentificationFragment;
