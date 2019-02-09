import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({ conversations, handleReceivedMessage }) => (
  <Fragment>
    {conversations.map(conversation => (
      <ActionCable
        key={conversation.id}
        channel={{ channel: 'MessagesChannel', conversation: conversation.id }}
        onReceived={handleReceivedMessage}
      />
    ))}
  </Fragment>
);

Cable.propTypes = {
  conversations         : PropTypes.instanceOf(Array).isRequired,
  handleReceivedMessage : PropTypes.func.isRequired
};

export default Cable;
