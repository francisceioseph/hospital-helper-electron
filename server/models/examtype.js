

module.exports = (sequelize, DataTypes) => {
  const ExamType = sequelize.define('ExamType', {
    exam_type_name: DataTypes.STRING
  }, {});
  ExamType.associate = function (models) {
    ExamType.ExamAppointment = ExamType.hasMany(models.ExamAppointment, { as: 'exams' });
  };
  return ExamType;
};
