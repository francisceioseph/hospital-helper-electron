

module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    profile_type: DataTypes.STRING
  }, {});
  Profile.associate = function (models) {
    Profile.Address = Profile.hasMany(models.Address, {
      as       : 'addresses',
      onDelete : 'CASCADE'
    });
  };
  return Profile;
};
