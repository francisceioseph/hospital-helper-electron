

module.exports = (sequelize, DataTypes) => {
  const DoctorSpecialty = sequelize.define('DoctorSpecialty', {
    doctor_id    : DataTypes.INTEGER,
    specialty_id : DataTypes.INTEGER
  }, {});
  DoctorSpecialty.associate = function (models) {
    DoctorSpecialty.Doctor = DoctorSpecialty.belongsTo(models.Doctor);
    DoctorSpecialty.Specialty = DoctorSpecialty.belongsTo(models.Specialty);
  };
  return DoctorSpecialty;
};
