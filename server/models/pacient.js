module.exports = (sequelize, DataTypes) => {
  const Pacient = sequelize.define(
    'Pacient',
    {
      type: DataTypes.STRING,
    },
    {

    }
  );
  Pacient.associate = function (models) {
    Pacient.Appointment = Pacient.hasMany(models.Appointment, {
      as       : 'appointments',
      onDelete : 'CASCADE',
    });
    Pacient.ExamAppointment = Pacient.hasMany(models.ExamAppointment, {
      as       : 'exams',
      onDelete : 'CASCADE',
    });
    Pacient.Address = Pacient.hasMany(models.Address, {
      as       : 'addresses',
      onDelete : 'CASCADE',
    });
    Pacient.Telephone = Pacient.hasMany(models.Telephone, {
      as       : 'telephones',
      onDelete : 'CASCADE',
    });
    Pacient.Email = Pacient.hasMany(models.Email, {
      as       : 'emails',
      onDelete : 'CASCADE',
    });

    Pacient.PersonalData = Pacient.hasOne(models.PersonalData, {
      as       : 'personal_datum',
      onDelete : 'CASCADE',
    });

    Pacient.Demographics = Pacient.hasOne(models.Demographics, {
      as       : 'demographics',
      onDelete : 'CASCADE',
    });
    Pacient.FamilyData = Pacient.hasOne(models.FamilyData, {
      as       : 'family_datum',
      onDelete : 'CASCADE',
    });
    Pacient.Prontuario = Pacient.hasOne(models.Demographics, {
      as       : 'prontuario',
      onDelete : 'CASCADE',
    });
    Pacient.NextOfKin = Pacient.hasOne(models.NextOfKin, {
      as       : 'next_of_kin',
      onDelete : 'CASCADE',
    });
  };

  return Pacient;
};
