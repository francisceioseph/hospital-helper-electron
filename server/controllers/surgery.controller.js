import {
  POST_SURGERY_RESPONSE_CHANNEL,
  UPDATE_SURGERY_RESPONSE_CHANNEL,
  REMOVE_SURGERY_RESPONSE_CHANNEL,
  GET_SURGERIES_BY_DOCTOR_RESPONSE_CHANNEL
} from '../constants/ipc.constants';

import { toPlainValues } from '../utils';
import {
  Surgery, SurgeryType, Profile, PersonalData
} from '../models';

const nestedModels = [
  {
    model      : Profile,
    as         : 'doctor',
    foreignKey : 'doctor_id',
    include    : [
      { model: PersonalData, as: 'personal_datum' }
    ]
  },
  {
    model      : Profile,
    as         : 'pacient',
    foreignKey : 'pacient_id',
    include    : [
      { model: PersonalData, as: 'personal_datum' }
    ]
  },
  {
    model      : SurgeryType,
    as         : 'surgery_type',
    foreignKey : 'surgery_type_id'
  }
];

export class SurgeryController {
  static async create(event, args) {
    try {
      const surgery = await Surgery.create(args.data);
      event.reply(POST_SURGERY_RESPONSE_CHANNEL, { data: toPlainValues(surgery, nestedModels) });
    } catch (error) {
      event.reply(POST_SURGERY_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async list(event, args) {
    try {
      const surgeries = await Surgery.findAll({ where: { doctor_id: args.doctorId }, include: nestedModels });
      event.reply(GET_SURGERIES_BY_DOCTOR_RESPONSE_CHANNEL, { data: toPlainValues(surgeries, nestedModels) });
    } catch (error) {
      event.reply(GET_SURGERIES_BY_DOCTOR_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async update(event, args) {
    try {
      await Surgery.update(args.data, { where: { id: args.id }, returning: true });
      const surgery = await Surgery.findOne({ where: { id: args.id }, include: nestedModels });
      event.reply(UPDATE_SURGERY_RESPONSE_CHANNEL, { data: toPlainValues(surgery, nestedModels) });
    } catch (error) {
      event.reply(UPDATE_SURGERY_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async remove(event, args) {
    try {
      await Surgery.destroy({ where: { id: args.id } });
      event.reply(REMOVE_SURGERY_RESPONSE_CHANNEL, { data: args });
    } catch (error) {
      event.reply(REMOVE_SURGERY_RESPONSE_CHANNEL, { data: null, error });
    }
  }
}
