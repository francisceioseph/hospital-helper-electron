'use strict';
module.exports = (sequelize, DataTypes) => {
  const Telephone = sequelize.define('Telephone', {
    number: DataTypes.STRING,
    contact_person: DataTypes.STRING,
    profile_id: DataTypes.INTEGER
  }, {});
  Telephone.associate = function(models) {
    // associations can be defined here
  };
  return Telephone;
};