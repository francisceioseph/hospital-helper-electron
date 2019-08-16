

module.exports = (sequelize, DataTypes) => {
  const Regulator = sequelize.define('Regulator', {
    type: DataTypes.STRING
  }, {});
  Regulator.associate = function (models) {
    Regulator.Address = Regulator.hasMany(models.Address, {
      as       : 'addresses',
      onDelete : 'CASCADE'
    });
    Regulator.Telephone = Regulator.hasMany(models.Telephone, {
      as       : 'telephones',
      onDelete : 'CASCADE'
    });
    Regulator.Email = Regulator.hasMany(models.Email, {
      as       : 'emails',
      onDelete : 'CASCADE'
    });
  };
  return Regulator;
};
