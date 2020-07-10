import React from 'react';
import StickyBox from 'react-sticky-box';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Buscar no Twitter"/>
              <SearchIcon/>
          </SearchWrapper>

        <StickyBox>
          <Body>
              <List 
                title="Talvez você curta"
                elements={[
                    <FollowSuggestion
                        name="John Doe"
                        nickname="@jonny"
                    />,
                    <FollowSuggestion
                        name="Peter Chain"
                        nickname="@peterchain"
                    />,
                    <FollowSuggestion
                        name="Herique Rigo"
                        nickname="@herique"
                    />
                ]}
              />
              <List 
                title="O que está acontecendo"
                elements={[
                    <News/>,
                    <News/>,
                    <News/>
                ]}
              />

          </Body>
        </StickyBox>
      </Container>
  )
}

export default SideBar;