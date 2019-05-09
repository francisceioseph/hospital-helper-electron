import { getRequiredDecorator, getOptionalDecorator, getDateTimeRequiredDecorator } from '../../forms/decorators';

export function getDecoratorManager(decorator, values) {
  return {
    birthDateDecorator : getDateTimeRequiredDecorator('personal_datum.birth_datum.date_of_birth', decorator, values),
    fullNameDecorator  : getRequiredDecorator('personal_datum.full_name', decorator, values),
    cpfDecorator       : getRequiredDecorator('personal_datum.cpf', decorator, values),
    genderDecorator    : getOptionalDecorator('personal_datum.gender', decorator, values),
    crmDecorator       : getRequiredDecorator('personal_datum.crm', decorator, values)
  };
}
