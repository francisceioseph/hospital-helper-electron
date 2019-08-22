const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');
const path = require('path');
const os = require('os');
const fs = require('fs');
const moment = require('moment');

require('moment/locale/pt-br');

const { shell } = require('electron');

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const createAppointmentReceiptPDF = (event, appointment) => {
  const document = {
    content: [
      {
        text      : 'PREFEITURA MUNICIPAL DE AQUIRAZ',
        style     : 'header',
        id        : 'header1',
        alignment : 'left',
      },
      {
        text      : 'SECRETARIA MUNICIPAL DE SAÚDE',
        style     : 'subheader',
        id        : 'subheader1',
        alignment : 'left',
      },
      {
        text      : 'HOSPITAL GERAL MANOEL ASSUNÇÃO PIRES',
        style     : 'subheader',
        id        : 'subheader2',
        alignment : 'left',
      },
      {
        text      : 'Comprovante de Agendamento de Consulta Médica',
        style     : 'headerMargin',
        id        : 'header2',
        alignment : 'center',
      },
      {
        style  : 'tableStyle',
        widths : ['*', 'auto'],
        table  : {
          body: [

            ['Paciente', appointment.pacient.personal_datum.full_name],
            ['Médico', appointment.doctor.personal_datum.full_name],
            ['Data do Agendamento', moment(new Date(appointment.scheduled_to)).format('DD/MM/YYYY HH:mm')],
            ['Hipótese Diagnóstica', appointment.diagnostic_hypotesis]
          ]
        }
      },
    ],
    pageSize : 'A5',
    styles   : {
      header: {
        fontSize : 14,
        bold     : true
      },
      headerMargin: {
        fontSize   : 14,
        bold       : false,
        decoration : 'underline',
        margin     : [0, 25, 0, 25],
      },
      subheader: {
        fontSize : 12,
        bold     : false
      },
      quote: {
        italics: true
      },
      small: {
        fontSize: 8
      },
      tableStyle: {
      }
    }
  };

  const pdf = pdfMake.createPdf(document);
  pdf.getBase64((pdfData) => {
    const pdfPath = path.join(os.tmpdir(), `print_${Date.now()}.pdf`);
    fs.writeFile(pdfPath, pdfData, 'base64', error => console.log(error));
    shell.openExternal(`file://${pdfPath}`);
  });
};

module.exports = { createAppointmentReceiptPDF };
