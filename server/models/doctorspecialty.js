

module.exports = (sequelize, DataTypes) => {
  const DoctorSpecialty = sequelize.define('DoctorSpecialty', {
    doctor_id    : DataTypes.INTEGER,
    specialty_id : DataTypes.INTEGER
  }, {});
  DoctorSpecialty.associate = function (models) {
    DoctorSpecialty.Profile = DoctorSpecialty.belongsTo(models.Profile);
    DoctorSpecialty.Specialty = DoctorSpecialty.belongsTo(models.Specialty);
  };
  return DoctorSpecialty;
};
