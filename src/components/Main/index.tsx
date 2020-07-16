import React from 'react';

import { Container, Header, ProfileInfo, Body, Avatar, Content, TextInput,Attachments, Icons, ImageIcon, GifIcon, NewTweetButton } from './styles';

// import ProfilePage from '../ProfilePage';
import BottomMenu from '../BottomMenu';
import Feed from '../Feed';

const Main: React.FC = () => {
    const handleClickedHome = () => {
        window.scrollTo(0, 0);
    }
  
    return (
    <Container>
        <Header>
            <ProfileInfo>
                <strong onClick={handleClickedHome}>Página Inicial</strong>
            </ProfileInfo>
        </Header>


        <Body>
              <Avatar/>
              <Content>

                  <TextInput contentEditable></TextInput>
                
                <Attachments>
                    <Icons>
                            <ImageIcon/>
                            <GifIcon/>
                    </Icons>

                    <NewTweetButton>Tweetar</NewTweetButton>
                </Attachments>


              </Content>
          </Body>

            {/* <ProfilePage/> */}
            <Feed/>

            <BottomMenu/>
      </Container>
  );
}

export default Main;