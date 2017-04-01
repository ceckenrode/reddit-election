import React from 'react';
import 'bootswatch/flatly/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import CenterContainer from '../CenterContainer';
import VoteList from '../../components/VoteList';
import Footer from '../../components/Footer';

const App = () => (
  <div className="main">
    <main className="main-container">
      <CenterContainer>
        <VoteList />
      </CenterContainer>
    </main>
    <Footer />
  </div>
);

export default App;
