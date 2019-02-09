import React from 'react';
import { Row, Col } from 'antd';
import { compose, lifecycle, withHandlers } from 'recompose';
import { ActionCable } from 'react-actioncable-provider';

import * as WebAPI from '../../../utils/api.service';
import Cable from './cable.component';
import ConversationList from './conversation-list.component';
import MessagesList from './messages-list.component';

const withLifecycle = lifecycle({
  async componentDidMount() {
    try {
      this.props.showPageLoader();
      const response = await WebAPI.getConversations();
      this.props.loadConversations(response);
    } catch (error) {
      console.log(error);
    } finally {
      this.props.hidePageLoader();
    }
  }
});

const handleReceivedConversation = props => (response) => {
  const { conversation } = response;
  props.addConversation(conversation);
};

const handleReceivedMessage = props => (response) => {
  const { message } = response;
  this.props.addNewMessage(message);
};

const handleSelectConversation = props => (conversationId) => {
  props.selectConversation(conversationId);
};

const withConversationHandlers = withHandlers({
  handleReceivedConversation,
  handleReceivedMessage,
  handleSelectConversation
});

const messages = [{
  sender_id: 2,
  content: 'hello'
},{
  sender_id: 2,
  content: 'this is a test'
}, {
  sender_id: 1,
  content: "Hi"
}, {
  sender_id: 1,
  content: 'this is a test'
}];

const ConversationsComponent = props => (
  <div>
    {/* <ActionCable channel={{ channel: 'conversations_channel' }} onReceived={props.handleReceivedConversation} />
    {props.conversations.length ? (
      <Cable conversations={props.conversations} handleReceivedMessage={props.handleReceivedMessage} />
    ) : null} */}

    <Row>
      {/* <Col span={8}>
        <ConversationList conversations={props.conversations} onSelect={props.handleSelectConversation} />
      </Col> */}
      <Col span={24}>
        <MessagesList messages={messages} user={props.user}/>
      </Col>
    </Row>
  </div>
);

export default compose(
  withLifecycle,
  withConversationHandlers
)(ConversationsComponent);
