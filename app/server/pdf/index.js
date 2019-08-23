const { createAppointmentReceiptPDF } = require('./appointment-pdf.controller');
const { createExamAppointmentReceiptPDF } = require('./exam-appointment-pdf.controller');
const { createSurgeryAppointmentReceiptPDF } = require('./surgery-appointment-pdf.controller');

module.exports = {
  createAppointmentReceiptPDF,
  createExamAppointmentReceiptPDF,
  createSurgeryAppointmentReceiptPDF
};
