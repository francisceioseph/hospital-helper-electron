import {
  POST_SPECIALTY_RESPONSE_CHANNEL,
  GET_SPECIALTIES_RESPONSE_CHANNEL,
  UPDATE_SPECIALTY_RESPONSE_CHANNEL,
  REMOVE_SPECIALTY_RESPONSE_CHANNEL
} from '../constants/ipc.constants';

import { toPlainValues } from '../utils';
import { Specialty } from '../models';

export class SpecialtyController {
  static async create(event, args) {
    try {
      const specialty = await Specialty.create(args.data);
      event.reply(POST_SPECIALTY_RESPONSE_CHANNEL, { data: toPlainValues(specialty, []) });
    } catch (error) {
      event.reply(POST_SPECIALTY_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async list(event) {
    try {
      const specialties = await Specialty.findAll();
      event.reply(GET_SPECIALTIES_RESPONSE_CHANNEL, { data: toPlainValues(specialties, []) });
    } catch (error) {
      event.reply(GET_SPECIALTIES_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async update(event, args) {
    try {
      await Specialty.update(args.data, { where: { id: args.id }, returning: true });
      const specialty = await Specialty.findOne({ where: { id: args.id } });
      event.reply(UPDATE_SPECIALTY_RESPONSE_CHANNEL, { data: toPlainValues(specialty, []) });
    } catch (error) {
      event.reply(UPDATE_SPECIALTY_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async remove(event, args) {
    try {
      await Specialty.destroy({ where: { id: args.id } });
      event.reply(REMOVE_SPECIALTY_RESPONSE_CHANNEL, { data: args });
    } catch (error) {
      event.reply(REMOVE_SPECIALTY_RESPONSE_CHANNEL, { data: null, error });
    }
  }
}
