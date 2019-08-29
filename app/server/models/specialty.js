

module.exports = (sequelize, DataTypes) => {
  const Specialty = sequelize.define('Specialty', {
    specialty_name: DataTypes.STRING
  }, { underscored: true });
  Specialty.associate = function (models) {
    Specialty.Profile = Specialty.belongsToMany(models.Profile, {
      as      : 'doctors',
      through : models.DoctorSpecialty
    });

    Specialty.Bed = Specialty.hasMany(models.Bed, { as: 'beds' });
  };
  return Specialty;
};
