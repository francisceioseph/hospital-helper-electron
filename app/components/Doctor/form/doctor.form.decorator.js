import { getRequiredDecorator, getOptionalDecorator, getDateTimeRequiredDecorator } from '../../forms/decorators';

export function getDecoratorManager(decorator, values) {
  return {
    birthDateDecorator            : getDateTimeRequiredDecorator('profile.personal_datum.date_of_birth', decorator, values),
    fullNameDecorator             : getRequiredDecorator('profile.personal_datum.full_name', decorator, values),
    cpfDecorator                  : getRequiredDecorator('profile.personal_datum.cpf', decorator, values),
    genderDecorator               : getOptionalDecorator('profile.personal_datum.gender', decorator, values),
    crmDecorator                  : getRequiredDecorator('profile.personal_datum.crm', decorator, values),
    emailDecorator                : getRequiredDecorator('email', decorator, values),
    passwordDecorator             : getRequiredDecorator('password', decorator, values),
    passwordConfirmationDecorator : getRequiredDecorator('password_confirmation', decorator, values)
  };
}
