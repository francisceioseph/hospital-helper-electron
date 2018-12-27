import React, { Fragment } from 'react';
import { Form } from 'antd';

import { LABELS } from '../pacient.form.constants';
import { FORM_ITEM_LAYOUT } from '../../../../components/forms';

import * as entries from '../pacient.form.entries';

const { Item: FormItem } = Form;

const DemographicsFragment = (props) => {
  const { decoratorManager } = props;
  return (
    <Fragment>
      <FormItem label={LABELS.JOB_TITLE} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.jobTitle(entries.getInputField())}
      </FormItem>
      <FormItem label={LABELS.JOB_CATEGORY} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.jobCategory(entries.getJobCategoryField())}
      </FormItem>
      <FormItem label={LABELS.FAMILY_HOLDER_KINSHIP} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.familyHolderKinship(entries.getFamilyHolderKinship())}
      </FormItem>
      <FormItem label={LABELS.IS_STUDYING} {...FORM_ITEM_LAYOUT}>
        {decoratorManager.isStuding(entries.getYesNoRadio())}
      </FormItem>
      <FormItem label={LABELS.LAST_COURSE_ATTENDED} {...FORM_ITEM_LAYOUT} hasFeedback>
        {decoratorManager.lastCourseAttended(entries.getLastCourseField())}
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
    </Fragment>
  );
};

export default DemographicsFragment;