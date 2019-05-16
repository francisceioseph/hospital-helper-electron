import { ipcRenderer as ipc } from 'electron';

export const printPdf = pdfData => ipc.send('print-to-pdf', pdfData);
