import {
  POST_SURGERY_TYPE_RESPONSE_CHANNEL,
  GET_SURGERY_TYPES_RESPONSE_CHANNEL,
  UPDATE_SURGERY_TYPE_RESPONSE_CHANNEL,
  REMOVE_SURGERY_TYPE_RESPONSE_CHANNEL
} from '../constants/ipc.constants';

import { toPlainValues } from '../utils';
import { SurgeryType } from '../models';

export class SurgeryTypeController {
  static async create(event, args) {
    try {
      const surgeryType = await SurgeryType.create(args.data);
      event.reply(POST_SURGERY_TYPE_RESPONSE_CHANNEL, { data: toPlainValues(surgeryType, []) });
    } catch (error) {
      event.reply(POST_SURGERY_TYPE_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async list(event) {
    try {
      const surgeryTypes = await SurgeryType.findAll();
      event.reply(GET_SURGERY_TYPES_RESPONSE_CHANNEL, { data: toPlainValues(surgeryTypes, []) });
    } catch (error) {
      event.reply(GET_SURGERY_TYPES_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async update(event, args) {
    try {
      await SurgeryType.update(args.data, { where: { id: args.id }, returning: true });
      const surgeryType = await SurgeryType.findOne({ where: { id: args.id } });
      event.reply(UPDATE_SURGERY_TYPE_RESPONSE_CHANNEL, { data: toPlainValues(surgeryType, []) });
    } catch (error) {
      event.reply(UPDATE_SURGERY_TYPE_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async remove(event, args) {
    try {
      await SurgeryType.destroy({ where: { id: args.id } });
      event.reply(REMOVE_SURGERY_TYPE_RESPONSE_CHANNEL, { data: args });
    } catch (error) {
      event.reply(REMOVE_SURGERY_TYPE_RESPONSE_CHANNEL, { data: null, error });
    }
  }
}
