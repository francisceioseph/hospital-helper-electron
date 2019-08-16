

module.exports = (sequelize, DataTypes) => {
  const Prontuario = sequelize.define('Prontuario', {
    pacient_id: DataTypes.INTEGER
  }, {});
  Prontuario.associate = function (models) {
    Prontuario.Appointment = Prontuario.hasMany(models.Appointment, {
      as: 'appointments',
    });
    Prontuario.ExamAppointment = Prontuario.hasMany(models.ExamAppointment, {
      as: 'exams',
    });
    Prontuario.SurgeryAppointment = Prontuario.hasMany(models.SurgeryAppointment, {
      as: 'surgeries',
    });
  };
  return Prontuario;
};
