

module.exports = (sequelize, DataTypes) => {
  const Email = sequelize.define('Email', {
    address: DataTypes.STRING
  }, {});
  Email.associate = function (models) {
    Email.Pacient = Email.belongsTo(models.Pacient);
    Email.Doctor = Email.belongsTo(models.Doctor);
    Email.Regulator = Email.belongsTo(models.Regulator);
  };
  return Email;
};
