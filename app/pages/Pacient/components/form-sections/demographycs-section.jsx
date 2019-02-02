import React, { Fragment } from 'react';
import { Form, Collapse } from 'antd';

import { LABELS } from '../pacient.form.constants';
import { FORM_ITEM_LAYOUT } from '../../../../components/forms';

import * as entries from '../pacient.form.entries';

const { Item: FormItem } = Form;
const { Panel } = Collapse;

const DemographicsFragment = (props) => {
  const { decoratorManager } = props;
  return (
    <Fragment>
      <Collapse defaultActiveKey="1">
        <Panel header="Nascimento" key="1">
          <FormItem label={LABELS.SOCIAL_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
            {decoratorManager.socialNameDecorator(entries.getInputField())}
          </FormItem>
          <FormItem label={LABELS.BIRTH_DATE} {...FORM_ITEM_LAYOUT} hasFeedback>
            {decoratorManager.birthDateDecorator(entries.getBirthDateField())}
          </FormItem>
          <FormItem label={LABELS.MOTHER_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
            {decoratorManager.motherNameDecorator(entries.getInputField())}
          </FormItem>
          <FormItem label={LABELS.FATHER_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
            {decoratorManager.fatherNameDecorator(entries.getInputField())}
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
        </Panel>
        <Panel header="Informações Demográficas" key="2">
          <FormItem label={LABELS.JOB_TITLE} {...FORM_ITEM_LAYOUT} hasFeedback>
            {decoratorManager.jobTitle(entries.getInputField())}
          </FormItem>
          <FormItem label={LABELS.JOB_CATEGORY} {...FORM_ITEM_LAYOUT} hasFeedback>
            {decoratorManager.jobCategory(entries.getJobCategoryField())}
          </FormItem>
          <FormItem label={LABELS.IS_STUDYING} {...FORM_ITEM_LAYOUT}>
            {decoratorManager.isStuding(entries.getYesNoRadio())}
          </FormItem>
          <FormItem label={LABELS.LAST_COURSE_ATTENDED} {...FORM_ITEM_LAYOUT} hasFeedback>
            {decoratorManager.degree(entries.getLastCourseField())}
          </FormItem>
          <FormItem label={LABELS.SEXUAL_ORIENTATION} {...FORM_ITEM_LAYOUT} hasFeedback>
            {decoratorManager.sexualOrientation(entries.getSexualOrientationField())}
          </FormItem>
          <FormItem label={LABELS.GENDER_IDENTITY} {...FORM_ITEM_LAYOUT} hasFeedback>
            {decoratorManager.genderIndentity(entries.genderIdentityField())}
          </FormItem>
          <FormItem label={LABELS.HAS_SPECIAL_NEEDS} {...FORM_ITEM_LAYOUT}>
            {decoratorManager.hasSpecialNeeds(entries.getYesNoRadio())}
          </FormItem>
          <FormItem label={LABELS.SPECIAL_NEEDS} {...FORM_ITEM_LAYOUT}>
            {decoratorManager.specialNeeds(entries.getSpecialNeedsInput())}
          </FormItem>
        </Panel>

        <Panel header="Responsável" key="3">
          <FormItem label={LABELS.NEXT_OF_KIN_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
            {decoratorManager.nextOfKinNameDecorator(entries.getInputField())}
          </FormItem>
          <FormItem label={LABELS.NEXT_OF_KIN_CPF} {...FORM_ITEM_LAYOUT} hasFeedback>
            {decoratorManager.nextOfKinCPFDecorator(entries.getInputField())}
          </FormItem>
        </Panel>
      </Collapse>
    </Fragment>
  );
};

export default DemographicsFragment;