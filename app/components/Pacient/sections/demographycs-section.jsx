import t from 'typy';
import React, { Fragment } from 'react';
import { Form, Divider } from 'antd';

import * as entries from '../form/pacient.form.entries';

import { LABELS } from '../form/pacient.form.constants';
import { FORM_ITEM_LAYOUT } from '../../forms';

const { Item: FormItem } = Form;

const DemographicsFragment = (props) => {
  const { decoratorManager, pacient } = props;
  const selectedCountry = t(pacient, 'personal_datum_attributes.birth_datum_attributes.country_of_birth').safeString;

  return (
    <Fragment>
      <Divider orientation="left">Nascimento</Divider>
      <FormItem label={LABELS.BIRTH_DATE} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.birthDateDecorator(entries.getBirthDateField())}
      </FormItem>
      <FormItem label={LABELS.COUNTRY_BIRTH} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.countryBirthDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.BIRTH_STATE} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.birthStateDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.BIRTH_CITY} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.birthCityDecorator(entries.getInputField())}
      </FormItem>
      {selectedCountry !== 'Brasil' && (
        <div>
          <Divider orientation="left">Naturalização</Divider>
          <FormItem label={LABELS.NAT_DATE} {...FORM_ITEM_LAYOUT} hasFeedback>
            {decoratorManager.natDateDecorator(entries.getCpfField())}
          </FormItem>
          <FormItem label={LABELS.NAT_PORT} {...FORM_ITEM_LAYOUT} hasFeedback>
            {decoratorManager.natPortDecorator(entries.getInputField())}
          </FormItem>
        </div>
      )}

      <Divider orientation="left">Responsável</Divider>
      <FormItem label={LABELS.NEXT_OF_KIN_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.nextOfKinNameDecorator(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.NEXT_OF_KIN_CPF} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.nextOfKinCPFDecorator(entries.getInputField())}
      </FormItem>
    </Fragment>
  );
};

export default DemographicsFragment;
