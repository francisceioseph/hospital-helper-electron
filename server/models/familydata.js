

module.exports = (sequelize, DataTypes) => {
  const FamilyData = sequelize.define('FamilyData', {
    mother_name    : DataTypes.STRING,
    father_name    : DataTypes.STRING,
    is_family_head : DataTypes.BOOLEAN,
    pacient_id     : DataTypes.INTEGER
  }, {});
  FamilyData.associate = function (models) {
    FamilyData.Profile = FamilyData.belongsTo(models.Profile);
  };
  return FamilyData;
};
