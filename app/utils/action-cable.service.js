import ActionCable from 'action-cable-react-jwt';
import { getCredentials } from './token';

export const ACTION_CABLE_BASE_URL = 'ws://localhost:3000/cable';

export const getActionCableConsumer = () => {
  const { token } = getCredentials();
  const tokenCode = token.split(' ')[1];

  return ActionCable.createConsumer(ACTION_CABLE_BASE_URL, tokenCode);
};

// function ChatConnection(callback) {
//   const wsUrl = 'ws://localhost:3000/cable';
//   const { token, user } = getCredentials();

//   this.senderId = user.id;
//   this.callback = callback;

//   this.connection = ActionCable.createConsumer(wsUrl, token.split(' ')[1]);
//   this.roomConnections = [];
// }

// ChatConnection.prototype.talk = function (message, roomId) {
//   const roomConnObj = this.roomConnections.find(conn => conn.roomId == roomId);
//   if (roomConnObj) {
//     roomConnObj.conn.speak(message);
//   } else {
//     console.log('Error: Cannot find room connection');
//   }
// };

// ChatConnection.prototype.openNewRoom = function (roomId) {
//   if (roomId !== undefined) {
//     this.roomConnections.push({ roomId, conn: this.createRoomConnection(roomId) });
//   }
// };

// ChatConnection.prototype.disconnect = function () {
//   this.roomConnections.forEach(c => c.conn.consumer.connection.close());
// };

// ChatConnection.prototype.createRoomConnection = function (roomId) {
//   const scope = this;
//   return this.connection.subscriptions.create(
//     { channel: 'RoomChannel', room_id: roomId, sender: scope.senderId },
//     {
//       connected() {
//         console.log(`connected to RoomChannel. Room code: ${roomId}.`);
//       },
//       disconnected() {},
//       received(data) {
//         if (data.participants.indexOf(scope.senderId) != -1) {
//           return scope.callback(data);
//         }
//       },
//       speak(message) {
//         return this.perform('speak', {
//           room_id : roomId,
//           sender  : scope.senderId,
//           message
//         });
//       }
//     }
//   );
// };

// export ChatConnection;
