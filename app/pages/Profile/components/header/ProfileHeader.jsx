import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import t from 'typy';

import {
  ROW_GUTTER,
  PICTURE_LAYOUT,
  IMAGE_SOURCE,
  USER_INFO_LAYOUT,
  DETAILS_LAYOUT
} from './ProfileHeaderConstants';

import { calculateAge, getLine2 } from '../../../../utils';

import './ProfileHeader.less';

class ProfileHeader extends Component {
  getNickName() {
    const fullName = t(this.props, 'profile.personal_datum.full_name').safeString;
    const names = fullName.split(' ');

    return names.length > 1 ? `${names[0]}, ${names[1]}` : names[0];
  }

  getAddressLine() {
    const address = t(this.props, 'profile.addresses[0]').safeObject;
    return address ? getLine2(address) : 'Endereço não informado';
  }

  getEmail() {
    return t(this.props, 'profile.emails[0]').safeString;
  }

  render() {
    const { profile } = this.props;
    const personalDatum = t(this.props, 'profile.personal_datum').safeObject;
    const birthDatum = t(this.props, 'profile.personal_datum.birth_datum').safeObject || {};
    const emails = t(this.props, 'profile.emails').safeObject || [];

    return (
      <Row type="flex" justify="center" gutter={ROW_GUTTER} className="profile-header">
        <Col {...PICTURE_LAYOUT}>
          <img className="avatar" alt="profile" src={personalDatum.img_url || IMAGE_SOURCE} />
        </Col>

        <Col {...USER_INFO_LAYOUT} className="user-info">
          <div className="top">
            <h1>{this.getNickName()}</h1>
            <h4>{personalDatum.full_name}</h4>
          </div>

          <div className="bottom">
            <h3>{profile.profile_type.toUpperCase()}</h3>
          </div>
        </Col>

        <Col {...DETAILS_LAYOUT} className="user-detail">
          <div>
            <h4>{`${calculateAge(birthDatum.date_of_birth)} anos`}</h4>
            <h4>{this.getAddressLine()}</h4>
            <h4>{this.getEmail()}</h4>
          </div>
        </Col>
      </Row>
    );
  }
}

ProfileHeader.propTypes = {
  profile: PropTypes.instanceOf(Object).isRequired
};

export default ProfileHeader;
