

module.exports = (sequelize, DataTypes) => {
  const SurgeryAppointment = sequelize.define('SurgeryAppointment', {
    prontuario_id   : DataTypes.INTEGER,
    doctor_id       : DataTypes.INTEGER,
    pacient_id      : DataTypes.INTEGER,
    scheduled_to    : DataTypes.DATE,
    real_end_time   : DataTypes.DATE,
    finished        : DataTypes.BOOLEAN,
    canceled        : DataTypes.BOOLEAN,
    surgery_type_id : DataTypes.INTEGER
  }, {});
  SurgeryAppointment.associate = function (models) {
    SurgeryAppointment.Pacient = SurgeryAppointment.belongsTo(models.Pacient);
    SurgeryAppointment.Doctor = SurgeryAppointment.belongsTo(models.Doctor);
    SurgeryAppointment.Prontuario = SurgeryAppointment.belongsTo(models.Prontuario);
    SurgeryAppointment.SurgeryType = SurgeryAppointment.belongsTo(models.SurgeryType);
  };
  return SurgeryAppointment;
};
