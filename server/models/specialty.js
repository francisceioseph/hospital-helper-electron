

module.exports = (sequelize, DataTypes) => {
  const Specialty = sequelize.define('Specialty', {
    specialty_name: DataTypes.STRING
  }, {});
  Specialty.associate = function (models) {
    Specialty.Doctor = Specialty.belongsToMany(models.Doctor, {
      as      : 'doctors',
      through : models.DoctorSpecialty
    });
  };
  return Specialty;
};
