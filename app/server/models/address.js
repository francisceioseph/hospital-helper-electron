

module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    street_name  : DataTypes.STRING,
    house_number : DataTypes.STRING,
    zipcode      : DataTypes.STRING,
    neighborhood : DataTypes.STRING,
    city         : DataTypes.STRING,
    state        : DataTypes.STRING,

  }, { underscored: true });
  Address.associate = function (models) {
    Address.belongsTo(models.Profile);
  };
  return Address;
};
