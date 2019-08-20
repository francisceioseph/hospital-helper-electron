

module.exports = (sequelize, DataTypes) => {
  const BirthData = sequelize.define('BirthData', {
    date_of_birth     : DataTypes.DATE,
    country_of_birth  : DataTypes.STRING,
    state_of_birth    : DataTypes.STRING,
    city_of_birth     : DataTypes.STRING,
    personal_datum_id : DataTypes.INTEGER
  }, { underscored: true });
  BirthData.associate = function (models) {
    BirthData.PersonalData = BirthData.belongsTo(models.PersonalData);
  };
  return BirthData;
};
