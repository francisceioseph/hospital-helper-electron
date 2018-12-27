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
      <FormItem label={LABELS.CPF} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.cpfDecorator(entries.getCpfField())}
      </FormItem>
      <FormItem label={LABELS.CNS} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.cnsDecorator(entries.getCnsField())}
      </FormItem>
      <FormItem label={LABELS.FAMILY_HOLDER} {...FORM_ITEM_LAYOUT}>
        {decoratorManager.familyHolderDecorator(entries.getYesNoRadio())}
      </FormItem>
      <FormItem label={LABELS.CNS_RESPONSAVEL} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.cnsResponsavelDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.SOCIAL_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.socialNameDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.BIRTH_DATE} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.birthDateDecorator(entries.getBirthDateField())}
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
      <FormItem label={LABELS.MOTHER_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.motherNameDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.FATHER_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.fatherNameDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.NATIONALITY} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.nationalityDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.COUNTRY_BIRTH} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.countryBirthDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.NAT_DATE} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.natDateDecorator(entries.getCpfField())}
      </FormItem>
      <FormItem label={LABELS.NAT_PORT} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.natPortDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.BIRTH_CITY} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.birthCityDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.BIRTH_STATE} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.birthStateDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.PHONE} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.phoneDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.EMAIL} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.emailDecorator(entries.getInputField())}
      </FormItem>
    </Fragment>
  );
};

export default IdentificationFragment;