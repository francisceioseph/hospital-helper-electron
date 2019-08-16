

module.exports = (sequelize, DataTypes) => {
  const Demographics = sequelize.define('Demographics', {
    job_title          : DataTypes.STRING,
    job_category       : DataTypes.STRING,
    is_estudying       : DataTypes.BOOLEAN,
    degree             : DataTypes.STRING,
    sexual_orientation : DataTypes.STRING,
    gender_identity    : DataTypes.STRING,
    has_special_needs  : DataTypes.BOOLEAN,
    special_needs      : DataTypes.STRING,
    pacient_id         : DataTypes.INTEGER
  }, {});
  Demographics.associate = function (models) {
    Demographics.Pacient = Demographics.belongsTo(models.Pacient);
  };
  return Demographics;
};
