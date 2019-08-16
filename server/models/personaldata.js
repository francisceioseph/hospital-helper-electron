

module.exports = (sequelize, DataTypes) => {
  const PersonalData = sequelize.define('PersonalData', {
    full_name   : DataTypes.STRING,
    social_name : DataTypes.STRING,
    rg          : DataTypes.STRING,
    cpf         : DataTypes.STRING,
    nis         : DataTypes.STRING,
    nationality : DataTypes.STRING,
    skin_color  : DataTypes.STRING,
    gender      : DataTypes.STRING,
    profile_id  : DataTypes.INTEGER,
    crm         : DataTypes.STRING,
    cns         : DataTypes.STRING
  }, {});
  PersonalData.associate = function (models) {
    PersonalData.BirthData = PersonalData.hasOne(models.BirthData, {
      as       : 'birth_datum',
      onDelete : 'CASCADE'
    });
    PersonalData.ImmigrationData = PersonalData.hasOne(models.ImmigrationData, {
      as       : 'immigration_datum',
      onDelete : 'CASCADE'
    });

    PersonalData.Pacient = PersonalData.belongsTo(models.Pacient, {
      as       : 'personal_datum',
      onDelete : 'CASCADE'
    });
    PersonalData.Doctor = PersonalData.belongsTo(models.Doctor, {
      as       : 'personal_datum',
      onDelete : 'CASCADE'
    });
    PersonalData.Regulator = PersonalData.belongsTo(models.Regulator, {
      as       : 'personal_datum',
      onDelete : 'CASCADE'
    });
  };
  return PersonalData;
};
