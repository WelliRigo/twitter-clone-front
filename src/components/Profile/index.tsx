import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

import ProfilePage from '../ProfilePage';
import BottomMenu from '../BottomMenu';

const Profile: React.FC = () => {
  return (
    <Container>
        <Header>
            <button>
                <BackIcon/>
            </button>

            <ProfileInfo>
                <strong>Welliton Rigo</strong>
                <span>500 Tweets</span>
            </ProfileInfo>
        </Header>

            <ProfilePage/>

            <BottomMenu/>
      </Container>
  );
}

export default Profile;