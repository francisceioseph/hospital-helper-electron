

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
  }, { underscored: true });

  Appointment.associate = function (models) {
    Appointment.belongsTo(models.Profile, { as: 'pacient', foreignKey: 'pacient_id' });
    Appointment.belongsTo(models.Profile, { as: 'doctor', foreignKey: 'doctor_id' });
    Appointment.belongsTo(models.AppointmentType, { as: 'appointment_type' });
    Appointment.belongsTo(models.Prontuario, { as: 'prontuario' });
  };

  return Appointment;
};
