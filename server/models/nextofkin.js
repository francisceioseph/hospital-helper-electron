

module.exports = (sequelize, DataTypes) => {
  const NextOfKin = sequelize.define('NextOfKin', {
    full_name  : DataTypes.STRING,
    cpf        : DataTypes.STRING,
    pacient_id : DataTypes.STRING
  }, {});
  NextOfKin.associate = function (models) {
    NextOfKin.Pacient = NextOfKin.belongsTo(models.Pacient);
  };
  return NextOfKin;
};
