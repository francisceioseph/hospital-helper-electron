

module.exports = (sequelize, DataTypes) => {
  const ImmigrationData = sequelize.define('ImmigrationData', {
    nationalization_date : DataTypes.DATE,
    ordinance_date       : DataTypes.DATE,
    personal_datum_id    : DataTypes.INTEGER
  }, { underscored: true });
  ImmigrationData.associate = function (models) {
    ImmigrationData.PersonalData = ImmigrationData.belongsTo(models.PersonalData);
  };
  return ImmigrationData;
};
