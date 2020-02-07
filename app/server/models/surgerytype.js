

module.exports = (sequelize, DataTypes) => {
  const SurgeryType = sequelize.define('SurgeryType', {
    surgery_type_name        : DataTypes.STRING,
    surgery_type_description : DataTypes.TEXT
  }, { underscored: true });
  SurgeryType.associate = function (models) {
    SurgeryType.ExamAppointment = SurgeryType.hasMany(models.SurgeryAppointment, { as: 'surgeries' });
  };
  return SurgeryType;
};
