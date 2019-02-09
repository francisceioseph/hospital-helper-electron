import React from 'react';
import { List, Avatar, Empty } from 'antd';

import ConversationListItem from './conversation-list-item.component';

const ConversationList = (props) => {
  const hasConversations = props.conversations.length > 0;

  return (
    <div>
      <h2>Conversas</h2>
      {hasConversations && (
        <List
          itemLayout="horizontal"
          dataSource={props.conversations}
          rowKey={conversation => `${conversation.id}`}
          renderItem={conversation => (
            <ConversationListItem conversation={conversation} onSelect={props.onSelect} user={props.user} />
          )}
        />
      )}

      {!hasConversations && <Empty description="Ainda não há nenhuma mensagem" />}
    </div>
  );
};

export default ConversationList;
