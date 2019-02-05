import React from 'react';
import PropTypes from 'prop-types';

import ProfileHeader from './header/ProfileHeader';
import PersonalDataCard from './cards/personal-data.component';
import DocumentationCard from './cards/documentation.component';
import BirthDataCard from './cards/birth-datum.component';
import AddressCard from './cards/address-card.component';
import EmailCard from './cards/emails-card.component';
import TelephoneCard from './cards/telephones-card.component';

import './profile.less';

const Profile = ({ profile }) => (
  <div>
    <ProfileHeader profile={profile} />
    <div className="masonry">
      <PersonalDataCard personalDatum={profile.personal_datum} />
      <DocumentationCard personalDatum={profile.personal_datum} />
      <BirthDataCard birthDatum={profile.personal_datum.birth_datum} />
      <AddressCard datasource={profile.addresses} />
      <EmailCard datasource={profile.emails} />
      <TelephoneCard datasource={profile.telephones} />
    </div>
  </div>
);

Profile.propTypes = {
  profile: PropTypes.instanceOf(Object).isRequired
};

export default Profile;
