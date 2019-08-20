

module.exports = (sequelize, DataTypes) => {
  const Specialty = sequelize.define('Specialty', {
    specialty_name: DataTypes.STRING
  }, {});
  Specialty.associate = function (models) {
    Specialty.Profile = Specialty.belongsToMany(models.Profile, {
      as      : 'doctors',
      through : models.DoctorSpecialty
    });
  };
  return Specialty;
};
