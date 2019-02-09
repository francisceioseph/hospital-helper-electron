import React from 'react';
import { Row, Col } from 'antd';
import { compose, lifecycle, withHandlers } from 'recompose';
import { ActionCableConsumer } from 'react-actioncable-provider';

import * as WebAPI from '../../../utils/api.service';
import Cable from './cable/cable.component';
import ConversationList from './conversation-list/conversation-list.component';
import MessagesList from './message-list/messages-list.component';
import './conversations-component.less';

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
  },

  componentWillUnmount() {}
});

const handleReceivedConversation = props => (response) => {
  const { conversation } = response;
  props.addConversation(conversation);
};

const handleReceivedMessage = props => (response) => {
  const { message } = response;
  props.addNewMessage(message);
};

const handleSelectConversation = props => (conversationId) => {
  props.selectConversation(conversationId);
};

const withConversationHandlers = withHandlers({
  handleReceivedConversation,
  handleReceivedMessage,
  handleSelectConversation
});

const ConversationsComponent = props => (
  <div>
    <ActionCableConsumer channel={{ channel: 'ConversationsChannel' }} onReceived={props.handleReceivedConversation} />
    {props.conversations.length ? (
      <Cable conversations={props.conversations} handleReceivedMessage={props.handleReceivedMessage} />
    ) : null}

    <Row type="flex" className="content-row">
      <Col span={5}>
        <ConversationList
          user={props.user}
          conversations={props.conversations}
          onSelect={props.handleSelectConversation}
        />
      </Col>
      <Col span={19}>
        <MessagesList conversation={props.conversation} user={props.user} />
      </Col>
    </Row>
  </div>
);

export default compose(
  withLifecycle,
  withConversationHandlers
)(ConversationsComponent);
