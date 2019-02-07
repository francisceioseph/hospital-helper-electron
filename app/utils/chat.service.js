import ActionCable from 'action-cable-react-jwt';
import { getCredentials } from './token';

function ChatConnection(callback) {
  const wsUrl = 'ws://localhost:3000/cable';
  const { token, user } = getCredentials();

  this.senderId = user.id;
  this.callback = callback;

  this.connection = ActionCable.createConsumer(wsUrl, token);
  this.roomConnections = [];
}

ChatConnection.prototype.talk = function (message, roomId) {
  const roomConnObj = this.roomConnections.find(conn => conn.roomId == roomId);
  if (roomConnObj) {
    roomConnObj.conn.speak(message);
  } else {
    console.log('Error: Cannot find room connection');
  }
};

ChatConnection.prototype.openNewRoom = function (roomId) {
  if (roomId !== undefined) {
    this.roomConnections.push({ roomId, conn: this.createRoomConnection(roomId) });
  }
};

ChatConnection.prototype.disconnect = function () {
  this.roomConnections.forEach(c => c.conn.consumer.connection.close());
};

ChatConnection.prototype.createRoomConnection = function (room_code) {
  const scope = this;
  return this.connection.subscriptions.create(
    { channel: 'RoomChannel', room_id: room_code, sender: scope.senderId },
    {
      connected() {
        console.log(`connected to RoomChannel. Room code: ${room_code}.`);
      },
      disconnected() {},
      received(data) {
        if (data.participants.indexOf(scope.senderId) != -1) {
          return scope.callback(data);
        }
      },
      speak(message) {
        return this.perform('speak', {
          room_id : room_code,
          message,
          sender  : scope.senderId
        });
      }
    }
  );
};

export default ChatConnection;
