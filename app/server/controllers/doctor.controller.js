import {
  GET_DOCTORS_RESPONSE_CHANNEL,
  POST_DOCTOR_RESPONSE_CHANNEL,
  UPDATE_DOCTOR_RESPONSE_CHANNEL,
  REMOVE_DOCTOR_RESPONSE_CHANNEL
} from '../constants/ipc.constants';

import {
  Profile, Address, Telephone, Email, PersonalData, Demographics, FamilyData, NextOfKin, BirthData,
  ImmigrationData
} from '../models';

import { toPlainValues } from '../utils';

const Doctor = Profile.scope('doctors');

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


export class DoctorController {
  static async create(event, args) {
    try {
      const doctor = await Doctor.create({ ...args.data, type: 'DOCTOR' }, {
        include: nestedModels,
      });

      event.reply(POST_DOCTOR_RESPONSE_CHANNEL, { data: toPlainValues(doctor, nestedModels) });
    } catch (error) {
      console.log(error);
      event.reply(POST_DOCTOR_RESPONSE_CHANNEL, { error, data: null });
    }
  }

  static async list(event) {
    let doctors;

    try {
      doctors = await Doctor.findAll({
        include: nestedModels,
      });
    } catch (error) {
      doctors = [];
    }

    event.reply(GET_DOCTORS_RESPONSE_CHANNEL, { data: toPlainValues(doctors, nestedModels) });
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
      ...doctorData
    } = args.data;

    try {
      const doctor = await Doctor.findOne({ where: doctorData.id });

      addresses.forEach(async (addr) => {
        if (addr.id) {
          await Address.update(addr, { where: { id: addr.id } });
        } else {
          doctor.addAddress(addr);
        }
      });

      telephones.forEach(async (tel) => {
        if (tel.id) {
          await Telephone.update(tel, { where: { id: tel.id } });
        } else {
          doctor.addTelephone(tel);
        }
      });

      emails.forEach(async (email) => {
        if (email.id) {
          await Email.update(email, { where: { id: email.id } });
        } else {
          doctor.addEmail(email);
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

      await doctor.save();
      await doctor.reload({ include: nestedModels });

      event.reply(UPDATE_DOCTOR_RESPONSE_CHANNEL, { data: toPlainValues(doctor, nestedModels) });
    } catch (error) {
      console.log(error);
      event.reply(UPDATE_DOCTOR_RESPONSE_CHANNEL, { error, data: null });
    }
  }

  static async remove(event, args) {
    try {
      await Doctor.destroy({
        where: args.data.id,
      });

      event.reply(REMOVE_DOCTOR_RESPONSE_CHANNEL, { data: args });
    } catch (error) {
      event.reply(REMOVE_DOCTOR_RESPONSE_CHANNEL, { error, data: null });
    }
  }
}
