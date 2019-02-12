// @flow

import * as React from 'react';
import deburr from 'lodash/deburr'

import { AutoComplete } from 'antd';
import { compose, withHandlers, withState, lifecycle } from 'recompose';

import * as WebAPI from '../../../../utils/api.service';

type User = {
  id: number,
  full_name: string
};

type Props = {
  users: Array<User>,
  handleOnSelect: Function,
  handleOnSearch: Function,
  createConversation: Function
};

const styles = {
  autocomplete: {
    width: '100%',
    marginBottom: '8px'
  }
};

const handleOnSelect = (props: Props) => async (value: string) => {
  props.createConversation(parseInt(value));
};

const handleOnSearch = (props: Props) => (value: string) => {
  const { users } = props;

  const filteredUsers = !value
    ? users
    : users.filter((user) => {
        const searchText = deburr(value.toLowerCase());
        const userName = deburr(user.full_name.toLowerCase());

        return userName.indexOf(searchText) >= 0;
      });

  props.setUserList(filteredUsers);
};

const withFormHandlers = withHandlers({
  handleOnSelect,
  handleOnSearch
});

const withUserListState = withState('userList', 'setUserList', []);

const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.setUserList(this.props.users);
  }
});

const NewConversationForm = (props: Props) => (
  <div>
    <AutoComplete
      style={styles.autocomplete}
      onSelect={props.handleOnSelect}
      onSearch={props.handleOnSearch}>
      {props.userList.map(user => (
        <AutoComplete.Option key={`${user.id}`} value={user.id.toString()}>
          {user.full_name}
        </AutoComplete.Option>))
      }
    </AutoComplete>
  </div>
);

const ConversationFormComponent = compose(
  withUserListState,
  withLifecycle,
  withFormHandlers
)(NewConversationForm);

export default ConversationFormComponent;
