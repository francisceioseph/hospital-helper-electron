import { createAction } from 'redux-actions';

export const loadConversations = createAction('[NET] LOAD CONVERSATIONS');
export const loadUserList = createAction('[NET] LOAD USER LIST');
export const addConversation = createAction('[NET] ADD NEW CONVERSATION');
export const addNewMessage = createAction('[NET] ADD NEW MESSAGE');
export const selectConversation = createAction('SELECT CONVERSATION');
