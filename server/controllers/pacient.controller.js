import {
  GET_PACIENTS_RESPONSE_CHANNEL,
  POST_PACIENT_RESPONSE_CHANNEL,
  UPDATE_PACIENT_RESPONSE_CHANNEL,
  REMOVE_PACIENT_RESPONSE_CHANNEL
} from '../constants/ipc.constants';

import {
  Profile, Address, Telephone, Email, PersonalData, Demographics, FamilyData, NextOfKin, BirthData,
  ImmigrationData
} from '../models';

import { toPlainValues } from '../utils';

const Pacient = Profile.scope('pacients');

const nestedModels = [
  { model: Address, as: 'addresses' },
  { model: Telephone, as: 'telephones' },
  { model: Email, as: 'emails' },
  {
    model   : PersonalData,
    as      : 'personal_datum',
    include : [
      { model: BirthData, as: 'birth_datum' },
      { model: ImmigrationData, as: 'immigration_datum' },
    ]
  },
  { model: Demographics, as: 'demographics' },
  { model: FamilyData, as: 'family_datum' },
  { model: NextOfKin, as: 'next_of_kin' },
];


export class PacientController {
  static async create(event, args) {
    try {
      const pacient = await Pacient.create({ ...args.data, type: 'PACIENT' }, {
        include: nestedModels,
      });

      event.reply(POST_PACIENT_RESPONSE_CHANNEL, { data: toPlainValues(pacient, nestedModels) });
    } catch (error) {
      console.log(error);
      event.reply(POST_PACIENT_RESPONSE_CHANNEL, { error, data: null });
    }
  }

  static async list(event) {
    let pacients;

    try {
      pacients = await Pacient.findAll({
        include: nestedModels,
      });
    } catch (error) {
      pacients = [];
    }

    event.reply(GET_PACIENTS_RESPONSE_CHANNEL, { data: toPlainValues(pacients, nestedModels) });
  }

  static async update(event, args) {
    const {
      addresses,
      telephones,
      emails,
      personal_datum,
      demographics,
      family_datum,
      next_of_kin,
      ...pacientData
    } = args.data;
    try {
      const pacient = await Pacient.findOne({ where: pacientData.id });

      addresses.forEach(async (addr) => {
        if (addr.id) {
          await Address.update(addr, { where: { id: addr.id } });
        } else {
          pacient.addAddress(addr);
        }
      });

      telephones.forEach(async (tel) => {
        if (tel.id) {
          await Telephone.update(tel, { where: { id: tel.id } });
        } else {
          pacient.addTelephone(tel);
        }
      });

      emails.forEach(async (email) => {
        if (email.id) {
          await Email.update(email, { where: { id: email.id } });
        } else {
          pacient.addEmail(email);
        }
      });

      if (personal_datum) {
        await PersonalData.update(personal_datum, { where: { id: personal_datum.id } });
      }

      if (personal_datum.birth_datum) {
        await BirthData.update(personal_datum.birth_datum, { where: { id: personal_datum.birth_datum.id } });
      }

      if (demographics) {
        await Demographics.update(demographics, { where: { id: demographics.id } });
      }

      if (family_datum) {
        await FamilyData.update(family_datum, { where: { id: family_datum.id } });
      }

      if (next_of_kin) {
        await NextOfKin.update(next_of_kin, { where: { id: next_of_kin.id } });
      }

      await pacient.save();
      await pacient.reload({ include: nestedModels });

      event.reply(UPDATE_PACIENT_RESPONSE_CHANNEL, { data: toPlainValues(pacient, nestedModels) });
    } catch (error) {
      console.log(error);
      event.reply(UPDATE_PACIENT_RESPONSE_CHANNEL, { error, data: null });
    }
  }

  static async remove(event, args) {
    try {
      await Pacient.destroy({
        where: args.data.id,
      });

      event.reply(REMOVE_PACIENT_RESPONSE_CHANNEL, { data: args });
    } catch (error) {
      event.reply(REMOVE_PACIENT_RESPONSE_CHANNEL, { error, data: null });
    }
  }
}
