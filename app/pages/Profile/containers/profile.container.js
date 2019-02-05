import t from 'typy';

import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';
import { getProfile } from '../profile.actions';

import ProfileComponent from '../components/profile.component';
import * as WebAPI from '../../../utils/api.service';

const mapStateToProps = ({ profiles, login }) => ({
  profile: profiles.profile,
  profileId: t(login, 'credentials.user.profile.id').safeObject,
});

const mapDispatchToProps = {
  showPageLoader,
  hidePageLoader,
  getProfile,
};

const withLifecycle = lifecycle({
  async componentDidMount() {
    try {
      this.props.showPageLoader();
      const response = await WebAPI.getProfile(this.props.profileId);
      this.props.getProfile(response);
    } catch (e) {
      console.log(e);
    } finally {
      this.props.hidePageLoader();
    }
  }
});

const ProfileWrapper = compose(withLifecycle)(ProfileComponent);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWrapper);
