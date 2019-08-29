function diffTime(olderDate, newerDate) {
  const aDayMs = 24 * 60 * 60 * 1000;
  const aDateMs = olderDate.getTime();
  const oDateMs = newerDate.getTime();
  return Math.round((oDateMs - aDateMs) / aDayMs);
}

module.exports = (sequelize, DataTypes) => {
  const Hospitalization = sequelize.define(
    'Hospitalization',
    {
      admission_date        : DataTypes.DATE,
      release_date          : DataTypes.DATE,
      intended_release_date : DataTypes.DATE,
      diagnosis             : DataTypes.TEXT,

      hospitalized_days: {
        type: DataTypes.VIRTUAL,
        get() {
          const admission = this.getDataValue('admission_date');
          const release = this.getDataValue('release_date');

          if (!admission) {
            return 'INDISPONÍVEL';
          }

          if (release) {
            const admissionDate = new Date(admission);
            const releaseDate = new Date(release);
            return diffTime(admissionDate, releaseDate);
          }

          const today = new Date();
          const admissionDate = new Date(admission);
          return diffTime(admissionDate, today);
        },
      },
    },
    { underscored: true }
  );
  Hospitalization.associate = function (models) {
    Hospitalization.Bed = Hospitalization.hasOne(models.Bed);
    Hospitalization.Pacient = Hospitalization.belongsTo(models.Profile, {
      as         : 'pacient',
      foreignKey : 'pacient_id',
    });
    Hospitalization.Doctor = Hospitalization.belongsTo(models.Profile, {
      as         : 'doctor',
      foreignKey : 'doctor_id',
    });
    Hospitalization.Transfer = Hospitalization.belongsTo(models.Transfer, {
      as: 'transfer',
    });
  };
  return Hospitalization;
};
