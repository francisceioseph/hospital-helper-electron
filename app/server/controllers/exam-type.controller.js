import {
  POST_EXAM_TYPE_RESPONSE_CHANNEL,
  GET_EXAM_TYPES_RESPONSE_CHANNEL,
  UPDATE_EXAM_TYPE_RESPONSE_CHANNEL,
  REMOVE_EXAM_TYPE_RESPONSE_CHANNEL
} from '../constants/ipc.constants';

import { toPlainValues } from '../utils';
import { ExamType } from '../models';

export class ExamTypeController {
  static async create(event, args) {
    try {
      const examType = await ExamType.create(args.data);
      event.reply(POST_EXAM_TYPE_RESPONSE_CHANNEL, { data: toPlainValues(examType, []) });
    } catch (error) {
      event.reply(POST_EXAM_TYPE_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async list(event) {
    try {
      const examTypes = await ExamType.findAll();
      event.reply(GET_EXAM_TYPES_RESPONSE_CHANNEL, { data: toPlainValues(examTypes, []) });
    } catch (error) {
      event.reply(GET_EXAM_TYPES_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async update(event, args) {
    try {
      await ExamType.update(args.data, { where: { id: args.id }, returning: true });
      const examType = await ExamType.findOne({ where: { id: args.id } });
      event.reply(UPDATE_EXAM_TYPE_RESPONSE_CHANNEL, { data: toPlainValues(examType, []) });
    } catch (error) {
      event.reply(UPDATE_EXAM_TYPE_RESPONSE_CHANNEL, { data: null, error });
    }
  }

  static async remove(event, args) {
    try {
      await ExamType.destroy({ where: { id: args.id } });
      event.reply(REMOVE_EXAM_TYPE_RESPONSE_CHANNEL, { data: args });
    } catch (error) {
      event.reply(REMOVE_EXAM_TYPE_RESPONSE_CHANNEL, { data: null, error });
    }
  }
}
