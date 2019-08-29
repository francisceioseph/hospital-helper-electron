

module.exports = (sequelize, DataTypes) => {
  const Bed = sequelize.define('Bed', {
    name: DataTypes.STRING
  }, { underscored: true });
  Bed.associate = function (models) {
    Bed.Specialty = Bed.belongsTo(models.Specialty);
    Bed.Hospitalization = Bed.hasMany(models.Hospitalization, {
      as: 'hospitalizations'
    });
  };
  return Bed;
};
