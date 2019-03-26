import ActionCable from 'action-cable-react-jwt';
import { getCredentials } from './token';

export const ACTION_CABLE_BASE_URL = 'ws://localhost:3000/cable';

export const getActionCableConsumer = () => {
  const credentials = getCredentials();
  const tokenCode = credentials ? credentials.token.split(' ')[1] : '';

  return ActionCable.createConsumer(ACTION_CABLE_BASE_URL, tokenCode);
};

