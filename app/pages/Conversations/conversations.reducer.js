import { handleActions } from 'redux-actions';
import {
  loadConversations, addConversation, addNewMessage, selectConversation
} from './conversations.actions';
import { pickBy } from '../../utils';

const defaultState = {
  conversations        : {},
  selectedConversation : {}
};

const handleSelectConversation = (state, action) => {
  const selectedConversation = state.conversations[action.payload];

  return {
    ...state,
    selectedConversation
  };
};

const handleLoadConversations = (state, action) => {
  const { data } = action.payload;
  const conversations = pickBy(data, 'id');

  return {
    ...state,
    conversations
  };
};

const handleAddConversation = (state, action) => {
  const { payload: conversation } = action;
  const conversations = {
    [conversation.id]: conversation,
    ...state.conversations
  };

  return {
    ...state,
    conversations
  };
};

const handleAddNewMessage = (state, action) => {
  const { payload: message } = action;
  const conversation = state.conversations[message.conversation_id];
  const messages = [...conversation.messages, message];

  return {
    ...state,
    conversations: {
      ...state.conversations,
      [conversation.id]: {
        ...conversation,
        messages
      }
    }
  };
};

export default handleActions(
  {
    [loadConversations]  : handleLoadConversations,
    [addConversation]    : handleAddConversation,
    [addNewMessage]      : handleAddNewMessage,
    [selectConversation] : handleSelectConversation
  },
  defaultState
);
