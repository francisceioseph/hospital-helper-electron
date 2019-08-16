

module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    scheduled_to         : DataTypes.DATE,
    intended_end_time    : DataTypes.DATE,
    real_end_time        : DataTypes.DATE,
    finished             : DataTypes.BOOLEAN,
    canceled             : DataTypes.BOOLEAN,
    doctor_id            : DataTypes.INTEGER,
    pacient_id           : DataTypes.INTEGER,
    prontuario_id        : DataTypes.INTEGER,
    appointment_type_id  : DataTypes.INTEGER,
    diagnostic_hypotesis : DataTypes.TEXT
  }, {});
  Appointment.associate = function (models) {
    Appointment.belongsTo(models.Doctor);
    Appointment.belongsTo(models.Pacient);
    Appointment.belongsTo(models.Prontuario);
    Appointment.belongsTo(models.AppointmentType);
  };
  return Appointment;
};
