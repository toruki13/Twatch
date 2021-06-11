import React from 'react';
import { Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import history from '../utils/history';
const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Router history={history}>
        <Header />
        <div>
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/edit/:id' exact component={StreamEdit} />
          <Route path='/streams/delete' exact component={StreamDelete} />
          <Route path='/streams/show' exact component={StreamShow} />
        </div>
      </Router>
    </Container>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }`;

const Container = styled.div`
  margin: 0;
  padding: 0;
  body {
    padding: 0;
  }
`;
