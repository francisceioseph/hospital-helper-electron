

module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    type: {
      type      : DataTypes.ENUM('PACIENT', 'DOCTOR', 'REGULATOR'),
      allowNull : false
    }
  }, {
    scopes: {
      doctors: {
        where: {
          type: 'DOCTOR'
        }
      },
      pacients: {
        where: {
          type: 'PACIENT'
        }
      },
      regulators: {
        where: {
          type: 'REGULATOR'
        }
      }
    }
  });

  Profile.associate = function (models) {
    Profile.Appointment = Profile.hasMany(models.Appointment, {
      as       : 'appointments',
      onDelete : 'CASCADE',
    });
    Profile.ExamAppointment = Profile.hasMany(models.ExamAppointment, {
      as       : 'exams',
      onDelete : 'CASCADE',
    });
    Profile.Address = Profile.hasMany(models.Address, {
      as       : 'addresses',
      onDelete : 'CASCADE',
    });
    Profile.Telephone = Profile.hasMany(models.Telephone, {
      as       : 'telephones',
      onDelete : 'CASCADE',
    });
    Profile.Email = Profile.hasMany(models.Email, {
      as       : 'emails',
      onDelete : 'CASCADE',
    });

    Profile.PersonalData = Profile.hasOne(models.PersonalData, {
      as       : 'personal_datum',
      onDelete : 'CASCADE',
    });

    Profile.Demographics = Profile.hasOne(models.Demographics, {
      as       : 'demographics',
      onDelete : 'CASCADE',
    });
    Profile.FamilyData = Profile.hasOne(models.FamilyData, {
      as       : 'family_datum',
      onDelete : 'CASCADE',
    });
    Profile.Prontuario = Profile.hasOne(models.Demographics, {
      as       : 'prontuario',
      onDelete : 'CASCADE',
    });
    Profile.NextOfKin = Profile.hasOne(models.NextOfKin, {
      as       : 'next_of_kin',
      onDelete : 'CASCADE',
    });
  };
  return Profile;
};
