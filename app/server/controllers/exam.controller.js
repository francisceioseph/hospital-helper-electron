import {
  POST_EXAM_RESPONSE_CHANNEL,
  UPDATE_EXAM_RESPONSE_CHANNEL,
  REMOVE_EXAM_RESPONSE_CHANNEL,
  GET_EXAMS_FOR_TYPE_RESPONSE_CHANNEL
} from '../constants/ipc.constants';

import { toPlainValues } from '../utils';
import {
  ExamAppointment, Profile, ExamType, PersonalData
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
    model      : ExamType,
    as         : 'exam_type',
    foreignKey : 'exam_type_id',

  }
];

export class ExamController {
  static async create(event, args) {
    try {
      const exam = await ExamAppointment.create(args.data);
      event.reply(POST_EXAM_RESPONSE_CHANNEL, { data: toPlainValues(exam, nestedModels) });
    } catch (error) {
      event.reply(POST_EXAM_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async list(event, args) {
    try {
      const exams = await ExamAppointment.findAll({ where: { exam_type_id: args.examTypeId }, include: nestedModels });
      event.reply(GET_EXAMS_FOR_TYPE_RESPONSE_CHANNEL, { data: toPlainValues(exams, nestedModels) });
    } catch (error) {
      event.reply(GET_EXAMS_FOR_TYPE_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async update(event, args) {
    try {
      await ExamAppointment.update(args.data, { where: { id: args.id }, returning: true });
      const exam = await ExamAppointment.findOne({ where: { id: args.id }, include: nestedModels });
      event.reply(UPDATE_EXAM_RESPONSE_CHANNEL, { data: toPlainValues(exam, nestedModels) });
    } catch (error) {
      event.reply(UPDATE_EXAM_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async remove(event, args) {
    try {
      await ExamAppointment.destroy({ where: { id: args.id } });
      event.reply(REMOVE_EXAM_RESPONSE_CHANNEL, { data: args });
    } catch (error) {
      event.reply(REMOVE_EXAM_RESPONSE_CHANNEL, { data: null, error });
    }
  }
}
