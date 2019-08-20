

module.exports = (sequelize, DataTypes) => {
  const Email = sequelize.define('Email', {
    address: DataTypes.STRING
  }, {});
  Email.associate = function (models) {
    Email.Profile = Email.belongsTo(models.Profile);
  };
  return Email;
};
