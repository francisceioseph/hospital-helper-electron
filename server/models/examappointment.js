

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
    ExamAppointment.Profile = ExamAppointment.belongsTo(models.Profile);
    ExamAppointment.Prontuario = ExamAppointment.belongsTo(models.Prontuario);
  };
  return ExamAppointment;
};
