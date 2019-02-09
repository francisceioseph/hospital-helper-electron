import React from 'react';
import t from 'typy';

import { List, Avatar } from 'antd';

const makeInitials = (name) => {
  const receiverNameTokens = receiverName.split(' ');
  const firstLetter = receiverNameTokens[0][0];
  return receiverNameTokens.length > 0
    ? receiverNameTokens[receiverNameTokens.length - 1][0]
    : receiverNameTokens[0][1];
};

const getLastMessageContent = (messages) => {
  const lastMessage = messages[messages.legth - 1] || { content: '' };
  return lastMessage.content;
};

const ConversationListItem = (props) => {
  const receiver = props.conversation.users.find(u => u.id !== props.user.id);
  const receiverName = t(receiver, 'profile.personal_datum.full_name');
  return (
    <List.Item onClick={props.onSelect}>
      <List.Item.Meta
        avatar={<Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{makeInitials(receiverName)}</Avatar>}
        title={props.receiverName}
        description={getLastMessageContent(props.conversation.messages)}
      />
    </List.Item>
  );
};

export default ConversationListItem;
