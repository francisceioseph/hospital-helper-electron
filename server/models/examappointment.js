

module.exports = (sequelize, DataTypes) => {
  const ExamAppointment = sequelize.define('ExamAppointment', {
    scheduled_to : DataTypes.DATE,
    finished     : DataTypes.BOOLEAN,
    canceled     : DataTypes.BOOLEAN,

  }, { underscored: true });
  ExamAppointment.associate = function (models) {
    ExamAppointment.belongsTo(models.Profile, { as: 'pacient', foreignKey: 'pacient_id' });
    ExamAppointment.belongsTo(models.Profile, { as: 'doctor', foreignKey: 'doctor_id' });
    ExamAppointment.Prontuario = ExamAppointment.belongsTo(models.Prontuario, { as: 'prontuario' });
    ExamAppointment.ExamType = ExamAppointment.belongsTo(models.ExamType, { as: 'exam_type' });
  };
  return ExamAppointment;
};
