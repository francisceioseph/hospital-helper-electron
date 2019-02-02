import * as WebAPI from '../../utils/WebAPI';

export const postDoctor = async (values) => {
  const { user, ...doctor } = values;
  await WebAPI.postUser(user);
  await WebAPI.createDoctor(doctor);
};
