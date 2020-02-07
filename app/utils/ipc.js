import { ipcRenderer } from 'electron';

export class IPC {
  static ipc() {
    return ipcRenderer;
  }

  static send(channel, data) {
    ipcRenderer.send(channel, data);
  }

  static sendOnce(channel, responseChannel, data) {
    ipcRenderer.send(channel, data);
    return IPC.once(responseChannel);
  }

  static sendOn(channel, responseChannel, data) {
    ipcRenderer.send(channel, data);
    return IPC.on(responseChannel);
  }

  static on(channel) {
    return new Promise((resolve, reject) => {
      ipcRenderer.on(channel, (event, data) => {
        if (data.error) {
          return reject(data);
        }

        return resolve(data);
      });
    });
  }

  static once(channel) {
    return new Promise((resolve, reject) => {
      ipcRenderer.once(channel, (event, data) => {
        if (data.error) {
          return reject(data);
        }

        return resolve(data);
      });
    });
  }
}
