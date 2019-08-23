import {
  POST_APPOINTMENT_TYPE_RESPONSE_CHANNEL,
  GET_APPOINTMENT_TYPES_RESPONSE_CHANNEL,
  UPDATE_APPOINTMENT_TYPE_RESPONSE_CHANNEL,
  REMOVE_APPOINTMENT_TYPE_RESPONSE_CHANNEL
} from '../constants/ipc.constants';

import { toPlainValues } from '../utils';
import { AppointmentType } from '../models';

export class AppointmentTypeController {
  static async create(event, args) {
    try {
      const appointmentType = await AppointmentType.create(args.data);
      event.reply(POST_APPOINTMENT_TYPE_RESPONSE_CHANNEL, { data: toPlainValues(appointmentType, []) });
    } catch (error) {
      event.reply(POST_APPOINTMENT_TYPE_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async list(event) {
    try {
      const appointmentTypes = await AppointmentType.findAll();
      event.reply(GET_APPOINTMENT_TYPES_RESPONSE_CHANNEL, { data: toPlainValues(appointmentTypes, []) });
    } catch (error) {
      event.reply(GET_APPOINTMENT_TYPES_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async update(event, args) {
    try {
      await AppointmentType.update(args.data, { where: { id: args.id }, returning: true });
      const appointmentType = await AppointmentType.findOne({ where: { id: args.id } });
      event.reply(UPDATE_APPOINTMENT_TYPE_RESPONSE_CHANNEL, { data: toPlainValues(appointmentType, []) });
    } catch (error) {
      event.reply(UPDATE_APPOINTMENT_TYPE_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async remove(event, args) {
    try {
      await AppointmentType.destroy({ where: { id: args.id } });
      event.reply(REMOVE_APPOINTMENT_TYPE_RESPONSE_CHANNEL, { data: args });
    } catch (error) {
      event.reply(REMOVE_APPOINTMENT_TYPE_RESPONSE_CHANNEL, { data: null, error });
    }
  }
}
