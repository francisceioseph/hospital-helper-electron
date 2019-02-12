import _ from 'lodash';
import t from 'typy';

import { connect } from 'react-redux';
import { loadConversations, addNewMessage, selectConversation, loadUserList, addConversation } from '../conversations.actions';
import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

import ConversationsComponent from '../components/conversations.component';

const mapStateToProps = ({ conversations, login }) => ({
  conversations : _.values(conversations.conversations),
  users         : _.values(conversations.users),
  conversation  : conversations.currentConversation,
  user          : t(login, 'credentials.user').safeObject || {}
});

const mapDispatchToProps = {
  loadConversations,
  showPageLoader,
  hidePageLoader,
  addNewMessage,
  addConversation,
  selectConversation,
  loadUserList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationsComponent);
