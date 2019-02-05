import * as WebAPI from '../../utils/api.service';

export const postDoctor = async (values) => {
  const { user, ...doctor } = values;
  await WebAPI.postUser(user);
  await WebAPI.createDoctor(doctor);
};
