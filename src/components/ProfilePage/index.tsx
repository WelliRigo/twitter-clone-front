import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, CalendarIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>

                <h1>Welliton Rigo</h1>
                <h2>@www_welliton</h2>

                <p>
                    Developer at <a href="https://robotica.ufsc.br/">@LAR-UFSC</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon/>
                        Florianópolis, Brasil
                    </li>
                    <li>
                        <CakeIcon/>
                        Nascido(a) em 26 de setembro de 2001
                    </li>
                    <li>
                        <CalendarIcon/>
                        Ingressou em maio de 2012
                    </li>
                </ul>

                <Followage>
                    <span>seguindo <strong>420</strong></span>
                    <span><strong>90</strong> seguidores</span>
                </Followage>
          </ProfileData>

          <Feed/>
      </Container>
  )
}

export default ProfilePage;