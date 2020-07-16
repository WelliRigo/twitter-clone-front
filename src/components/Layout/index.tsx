import React from 'react';

import {Route, BrowserRouter} from 'react-router-dom';

import { Container, Wrapper } from './styles';

import MenuBar from '../MenuBar';
import Main from '../Main';
import Profile from '../Profile';
import SideBar from '../SideBar';

const Layout: React.FC = () => {
  return (
      <Container>
           <Wrapper>
               <MenuBar />
               <BrowserRouter>
                  <Route component={Main} path="/home" exact/>
                  <Route component={Profile} path="/profile"/>
               </BrowserRouter>
               <SideBar />
           </Wrapper>
      </Container>
  )
}

export default Layout;