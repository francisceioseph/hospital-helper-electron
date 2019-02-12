import _ from 'lodash';

import { handleActions } from 'redux-actions';
import {
  loadConversations, addConversation, addNewMessage, selectConversation, loadUserList
} from './conversations.actions';
import { pickBy } from '../../utils';

const defaultState = {
  users               : {},
  conversations       : {},
  currentConversation : {
    messages: []
  }
};

const handleLoadUserList = (state,action) => {
  const { data } = action.payload;
  const users = pickBy(data, 'id');

  return {
    ...state,
    users
  };
}

const handleSelectConversation = (state, action) => {
  const currentConversation = state.conversations[action.payload];

  return {
    ...state,
    currentConversation
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

const getMessages = (conversation, message) => {
  const messages = [...conversation.messages, message];
  return _.uniqBy(messages, 'id');
};

const getCurrentConversation = (current, conversation, message) => {
  const isEqual = current.id === conversation.id;

  if (isEqual) {
    return {
      ...current,
      messages: getMessages(current, message)
    };
  }

  return { ...current };
};

const handleAddNewMessage = (state, action) => {
  const { payload: message } = action;
  const conversation = state.conversations[message.conversation_id];
  const messages = getMessages(conversation, message);
  const currentConversation = getCurrentConversation(state.currentConversation, conversation, message);

  return {
    ...state,
    conversations: {
      ...state.conversations,
      [conversation.id]: {
        ...conversation,
        messages
      }
    },
    currentConversation
  };
};

export default handleActions(
  {
    [loadConversations]  : handleLoadConversations,
    [addConversation]    : handleAddConversation,
    [addNewMessage]      : handleAddNewMessage,
    [selectConversation] : handleSelectConversation,
    [loadUserList]       : handleLoadUserList,
  },
  defaultState
);
