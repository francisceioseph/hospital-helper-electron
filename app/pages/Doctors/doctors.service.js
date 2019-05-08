import * as WebAPI from '../../utils/api.service';

export const postDoctor = (values) => {
  const user = {
    ...values,
    profile: {
      ...values.profile,
      profile_type: 'Doctor'
    }
  };

  return WebAPI.postUser(user);
};
