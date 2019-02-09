import React from 'react';

import Message from './message.component';

import './messages-list.component.less';

const endsSequence = (next, current) => {
  if (next) {
    // let nextMoment = moment(next.timestamp);
    // let nextDuration = moment.duration(nextMoment.diff(currentMoment));
    // nextBySameAuthor = next.author === current.author;

    // if (nextBySameAuthor && nextDuration.as('hours') < 1) {
    //   endsSequence = false;
    // }

    return next.sender_id !== current.sender_id;
  }

  return true;
}

const startSequence = (previous, current) => {
  if (previous) {
    // let previousMoment = moment(previous.timestamp);
    // let previousDuration = moment.duration(currentMoment.diff(previousMoment));
    // prevBySameAuthor = previous.author === current.author;
    
    // if (prevBySameAuthor && previousDuration.as('hours') < 1) {
    //   startsSequence = false;
    // }

    // if (previousDuration.as('hours') < 1) {
    //   showTimestamp = false;
    // }

    return previous.sender_id !== current.sender_id;
  }

  return true;
}

const belongsToCurrentUser = (message, user) => {
  return message.sender_id === user.id;
}

const renderMessages = (messages, user) => {
  return messages.map((message, index) => {
    const previous = messages[index - 1];
    const next = messages[index + 1];

    const messageStartsSequence = startSequence(previous, message);
    const messageEndsSequence = endsSequence(next, message);

    return <Message
      key={index}
      isMine={belongsToCurrentUser(message, user)}
      startsSequence={messageStartsSequence}
      endsSequence={messageEndsSequence}
      showTimestamp={false}
      data={message}/>
  })
}

const MessagesList = (props) => {
  const hasMessages = props.messages.length > 0;

  return (
    <div className="message-list-container">
      {hasMessages && (
        renderMessages(props.messages, props.user)
      )}

      {!hasMessages && <Empty description="Ainda não há nenhuma mensagem" />}
    </div>
  );
};

export default MessagesList;
