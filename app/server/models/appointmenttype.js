

module.exports = (sequelize, DataTypes) => {
  const AppointmentType = sequelize.define('AppointmentType', {
    appointment_type_name        : DataTypes.STRING,
    appointment_type_description : DataTypes.TEXT
  }, { underscored: true });
  AppointmentType.associate = function (models) {
    AppointmentType.Appointment = AppointmentType.hasMany(models.Appointment, { as: 'appointments' });
  };
  return AppointmentType;
};
