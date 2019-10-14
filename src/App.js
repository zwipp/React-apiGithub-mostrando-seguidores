import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
      <Route path="/" exact component={Login}/>
      <Route path="/seguidores/:usuario" component={Home}/>
      </BrowserRouter>
    );
  }
}

export default App;
