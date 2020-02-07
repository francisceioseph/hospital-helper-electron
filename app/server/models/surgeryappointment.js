

module.exports = (sequelize, DataTypes) => {
  const SurgeryAppointment = sequelize.define('SurgeryAppointment', {
    prontuario_id   : DataTypes.INTEGER,
    scheduled_to    : DataTypes.DATE,
    real_end_time   : DataTypes.DATE,
    finished        : DataTypes.BOOLEAN,
    canceled        : DataTypes.BOOLEAN,
    surgery_type_id : DataTypes.INTEGER
  }, { underscored: true });
  SurgeryAppointment.associate = function (models) {
    SurgeryAppointment.belongsTo(models.Profile, { as: 'pacient', foreignKey: 'pacient_id' });
    SurgeryAppointment.belongsTo(models.Profile, { as: 'doctor', foreignKey: 'doctor_id' });
    SurgeryAppointment.SurgeryType = SurgeryAppointment.belongsTo(models.SurgeryType, {
      as         : 'surgery_type',
      foreignKey : 'surgery_type_id'
    });
    SurgeryAppointment.Prontuario = SurgeryAppointment.belongsTo(models.Prontuario, {
      as         : 'prontuario',
      foreignKey : 'prontuario_id'
    });
  };
  return SurgeryAppointment;
};
