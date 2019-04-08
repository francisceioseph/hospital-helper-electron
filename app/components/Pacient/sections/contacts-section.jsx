import React, { Fragment } from 'react';
import { Form, Divider } from 'antd';

import * as entries from '../form/pacient.form.entries';
import { LABELS } from '../form/pacient.form.constants';
import { FORM_ITEM_LAYOUT } from '../../forms';

const { Item: FormItem } = Form;

const ContactsFragment = (props) => {
  const { decoratorManager } = props;

  return (
    <Fragment>
      <Divider orientation="left">Endereço</Divider>
      <FormItem label={LABELS.STREE_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.streetName(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.HOUSE_NUMBER} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.houseNumber(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.ZIPCODE} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.zipcode(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.NEIGHBORHOOD} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.neighborhood(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.CITY} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.city(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.STATE} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.state(entries.getInputField())}
      </FormItem>

      <Divider orientation="left">Contatos</Divider>
      <FormItem label={LABELS.PHONE} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.phoneDecorator(entries.getInputField())}
      </FormItem>

      <FormItem label={LABELS.EMAIL} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.emailDecorator(entries.getInputField())}
      </FormItem>
    </Fragment>
  );
};

export default ContactsFragment;
