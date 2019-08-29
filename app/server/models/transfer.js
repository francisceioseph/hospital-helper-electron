function diffTime(olderDate, newerDate) {
  const aDayMs = 24 * 60 * 60 * 1000;
  const aDateMs = olderDate.getTime();
  const oDateMs = newerDate.getTime();
  return Math.round(((oDateMs - aDateMs) / aDayMs));
}

module.exports = (sequelize, DataTypes) => {
  const Transfer = sequelize.define('Transfer', {
    solicitation_date    : DataTypes.DATE,
    finished_date        : DataTypes.DATE,
    diagnosis            : DataTypes.TEXT,
    is_transfer_finished : {
      type: DataTypes.VIRTUAL,
      get() {
        const transferFinished = this.getDataValue('finished_date');
        return !!transferFinished;
      }
    },
    transfer_days: {
      type: DataTypes.VIRTUAL,
      get() {
        const transfer = this.getDataValue('solicitation_date');
        const transferFinished = this.getDataValue('finished_date');

        if (!transfer) {
          return 'INDISPONÍVEL';
        }

        if (transferFinished) {
          const transferDate = new Date(transfer);
          const transferFinishedDate = new Date(transferFinished);
          return diffTime(transferDate, transferFinishedDate);
        }

        const today = new Date();
        const transferDate = new Date(transfer);
        return diffTime(transferDate, today);
      }
    }
  }, { underscored: true });
  Transfer.associate = function (models) {
    Transfer.Pacient = Transfer.hasOne(models.Profile,
      {
        as         : 'pacient',
        foreignKey : 'pacient_id'
      });
    Transfer.Doctor = Transfer.hasOne(models.Profile,
      {
        as         : 'doctor',
        foreignKey : 'doctor_id'
      });
    Transfer.Hospitalization = Transfer.hasOne(models.Hospitalization);
  };
  return Transfer;
};
