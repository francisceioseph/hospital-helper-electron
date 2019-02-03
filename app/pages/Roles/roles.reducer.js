import { pickBy } from '../../utils';
import { handleActions } from 'redux-actions';
import {
  getRoles, retrieveRole, createRole, updateRole, removeRole,
} from './roles.actions';

const defaultState = {
  roles: {},
  role: {},
};

const handleListRoles = (state, action) => {
  const { data } = action.payload;
  const roles = pickBy(data, 'id');
  return {
    ...state,
    roles,
  };
};

const handleGetRole = (state, action) => {
  const { data: role } = action.payload;
  return {
    ...state,
    role,
  };
};

const handleCreateRole = (state, action) => {
  const role = action.payload;
  return {
    ...state,
    roles: {
      ...state.roles,
      [role.user_id]: role,
    },
  };
};

const handleEditRole = (state, action) => {
  const role = action.payload;
  return {
    ...state,
    roles: {
      ...state.roles,
      [role.user_id]: role,
    },
  };
};

const handleRemoveRole = (state, action) => {
  const role = action.payload;
  const id = role.user_id;
  const { [id]: r, ...roles } = state.roles;

  return {
    ...state,
    roles,
  };
};

export default handleActions({
  [getRoles]: handleListRoles,
  [retrieveRole]: handleGetRole,
  [createRole]: handleCreateRole,
  [updateRole]: handleEditRole,
  [removeRole]: handleRemoveRole,
}, defaultState);
