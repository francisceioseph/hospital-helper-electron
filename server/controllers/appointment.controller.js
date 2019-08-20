import {
  POST_APPOINTMENT_RESPONSE_CHANNEL,
  GET_APPOINTMENTS_RESPONSE_CHANNEL,
  UPDATE_APPOINTMENT_RESPONSE_CHANNEL,
  REMOVE_APPOINTMENT_RESPONSE_CHANNEL,
  GET_DOCTOR_APPOINTMENTS_RESPONSE_CHANNEL
} from '../constants/ipc.constants';

import { toPlainValues } from '../utils';
import {
  Appointment, Profile, AppointmentType, PersonalData
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
    model : AppointmentType,
    as    : 'appointment_type'
  }
];
export class AppointmentController {
  static async create(event, args) {
    try {
      const appointment = await Appointment.create(args.data);
      event.reply(POST_APPOINTMENT_RESPONSE_CHANNEL, { data: toPlainValues(appointment, nestedModels) });
    } catch (error) {
      event.reply(POST_APPOINTMENT_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async list(event, args) {
    try {
      const appointments = await Appointment.findAll({ where: { doctor_id: args.doctorId }, include: nestedModels });
      event.reply(GET_DOCTOR_APPOINTMENTS_RESPONSE_CHANNEL, { data: toPlainValues(appointments, nestedModels) });
    } catch (error) {
      event.reply(GET_DOCTOR_APPOINTMENTS_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async update(event, args) {
    try {
      await Appointment.update(args.data, { where: { id: args.id }, returning: true });
      const appointment = await Appointment.findOne({ where: { id: args.id } });
      event.reply(UPDATE_APPOINTMENT_RESPONSE_CHANNEL, { data: toPlainValues(appointment, nestedModels) });
    } catch (error) {
      event.reply(UPDATE_APPOINTMENT_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async remove(event, args) {
    try {
      await Appointment.destroy({ where: { id: args.id } });
      event.reply(REMOVE_APPOINTMENT_RESPONSE_CHANNEL, { data: args });
    } catch (error) {
      event.reply(REMOVE_APPOINTMENT_RESPONSE_CHANNEL, { data: null, error });
    }
  }
}
