

module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('Doctor', {
    type: DataTypes.STRING
  }, {});
  Doctor.associate = function (models) {
    Doctor.Appointment = Doctor.hasMany(models.Appointment, {
      as       : 'appointments',
      onDelete : 'CASCADE',
    });
    Doctor.ExamAppointment = Doctor.hasMany(models.ExamAppointment, {
      as: 'exams'
    });
    Doctor.Specialty = Doctor.belongsToMany(models.Specialty, {
      as      : 'specialties',
      through : models.DoctorSpecialty
    });
    Doctor.Address = Doctor.hasMany(models.Address, {
      as       : 'addresses',
      onDelete : 'CASCADE'
    });
    Doctor.Telephone = Doctor.hasMany(models.Telephone, {
      as       : 'telephones',
      onDelete : 'CASCADE'
    });
    Doctor.Email = Doctor.hasMany(models.Email, {
      as       : 'emails',
      onDelete : 'CASCADE'
    });
    Doctor.PersonalData = Doctor.hasOne(models.PersonalData, {
      as       : 'personal_datum',
      onDelete : 'CASCADE',
    });
  };
  return Doctor;
};
