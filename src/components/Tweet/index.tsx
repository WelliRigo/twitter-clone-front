import React from 'react';

import { 
    Container, 
    Retweeted, 
    RetweetedIcon, 
    Body, 
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              <RetweetedIcon/>
              Welliton retweetou
          </Retweeted>

          <Body>
              <Avatar/>
              <Content>
                  <Header>
                      <strong>Smarter Every Day</strong>
                      <span>@smartereveryday</span>
                      <Dot/>
                      <time>09 de jul</time>
                  </Header>

                  <Description>I captured a Macro shot at 100,000fps</Description>

                  <ImageContent/>

                  <Icons>
                      <Status>
                          <CommentIcon/>
                          18
                      </Status>
                      <Status>
                          <RetweetIcon/>
                          500
                      </Status>
                      <Status>
                          <LikeIcon/>
                          999
                      </Status>
                  </Icons>

              </Content>
          </Body>

      </Container>
  );
}

export default Tweet;