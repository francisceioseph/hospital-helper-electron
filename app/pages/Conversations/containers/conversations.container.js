import _ from 'lodash';
import t from 'typy';

import { connect } from 'react-redux';
import { loadConversations, addNewMessage, selectConversation } from '../conversations.actions';
import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

import ConversationsComponent from '../components/conversations.component';

const mapStateToProps = ({ conversations, login }) => ({
  conversations : _.values(conversations.conversations),
  conversation  : conversations.currentConversation,
  user          : t(login, 'credentials.user').safeObject || {}
});

const mapDispatchToProps = {
  loadConversations,
  showPageLoader,
  hidePageLoader,
  addNewMessage,
  selectConversation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationsComponent);
