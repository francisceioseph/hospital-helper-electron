import {
  POST_EXAM_RESPONSE_CHANNEL,
  GET_EXAMS_RESPONSE_CHANNEL,
  UPDATE_EXAM_RESPONSE_CHANNEL,
  REMOVE_EXAM_RESPONSE_CHANNEL,
  GET_EXAMS_FOR_TYPE_RESPONSE_CHANNEL
} from '../constants/ipc.constants';

import { toPlainValues } from '../utils';
import { Exam, Profile, ExamType } from '../models';


const nestedModels = [
  { model: Profile, as: 'doctor', foreignKey: 'doctor_id' },
  { model: Profile, as: 'pacient', foreignKey: 'pacient_id' },
  { model: ExamType, as: 'exam_type' }
];

export class ExamController {
  static async create(event, args) {
    try {
      const exam = await Exam.create(args.data);
      event.reply(POST_EXAM_RESPONSE_CHANNEL, { data: toPlainValues(exam, nestedModels) });
    } catch (error) {
      event.reply(POST_EXAM_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async list(event, args) {
    try {
      const exams = await Exam.findAll({ where: { exam_type_id: args.examTypeId } });
      event.reply(GET_EXAMS_FOR_TYPE_RESPONSE_CHANNEL, { data: toPlainValues(exams, nestedModels) });
    } catch (error) {
      event.reply(GET_EXAMS_FOR_TYPE_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async update(event, args) {
    try {
      await Exam.update(args.data, { where: { id: args.id }, returning: true });
      const exam = await Exam.findOne({ where: { id: args.id } });
      event.reply(UPDATE_EXAM_RESPONSE_CHANNEL, { data: toPlainValues(exam, nestedModels) });
    } catch (error) {
      event.reply(UPDATE_EXAM_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async remove(event, args) {
    try {
      await Exam.destroy({ where: { id: args.id } });
      event.reply(REMOVE_EXAM_RESPONSE_CHANNEL, { data: args });
    } catch (error) {
      event.reply(REMOVE_EXAM_RESPONSE_CHANNEL, { data: null, error });
    }
  }
}
