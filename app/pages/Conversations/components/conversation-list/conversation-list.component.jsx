import React from 'react';
import { List, Avatar, Empty } from 'antd';
import { compose, lifecycle } from 'recompose';

import ConversationListItem from './conversation-list-item.component';
import NewConversationForm from './conversation-form.component';

const styles = {
  container: {
    paddingRight: '16px'
  }
};

const ConversationList = (props) => {
  const hasConversations = props.conversations.length > 0;

  console.log(props.users);

  return (
    <div style={styles.container}>
      <NewConversationForm
        users={props.users}
        createConversation={props.createConversation}/>
      {hasConversations && (
        <List
          itemLayout="horizontal"
          dataSource={props.conversations}
          rowKey={conversation => `${conversation.id}`}
          renderItem={conversation => (
            <ConversationListItem
              conversation={conversation}
              onSelect={() => props.onSelect(conversation.id)}
              user={props.user}
            />
          )}
        />
      )}

      {!hasConversations && <Empty description="Ainda não há nenhuma mensagem" />}
    </div>
  );
};

export default ConversationList;
