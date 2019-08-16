

module.exports = (sequelize, DataTypes) => {
  const ExamAppointment = sequelize.define('ExamAppointment', {
    scheduled_to  : DataTypes.DATE,
    finished      : DataTypes.BOOLEAN,
    canceled      : DataTypes.BOOLEAN,
    exam_type_id  : DataTypes.INTEGER,
    prontuario_id : DataTypes.INTEGER,
    doctor_id     : DataTypes.INTEGER,
    pacient_id    : DataTypes.INTEGER
  }, {});
  ExamAppointment.associate = function (models) {
    ExamAppointment.ExamType = ExamAppointment.belongsTo(models.ExamType);
    ExamAppointment.Doctor = ExamAppointment.belongsTo(models.Doctor);
    ExamAppointment.Pacient = ExamAppointment.belongsTo(models.Pacient);
    ExamAppointment.Prontuario = ExamAppointment.belongsTo(models.Prontuario);
  };
  return ExamAppointment;
};
