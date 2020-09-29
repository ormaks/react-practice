import React, { FC } from 'react';
import { GlobalStyle } from '../assets/styles/Global.styled';
import Header from './Header/Header';

const App: FC = () => {
  return (
    <div>
      <GlobalStyle/>
      <Header headerText="Hello World"/>
      <img src="#" alt=""/>
    </div>
  );
};

export default App;
