import * as WebAPI from '../../utils/api.service';

export const postDoctor = async (values) => {
  const user = {
    ...values,
    profile: {
      ...values.profile,
      profile_type: 'Doctor',
    },
  };

  await WebAPI.postUser(user);
};
