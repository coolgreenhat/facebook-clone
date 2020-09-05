import React from 'react';
import './App.css';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Feed from './feed/Feed';
import Widgets from './widgets/Widgets';
import Login from './login/Login';
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="App">
      {!user ? (
        <Login />
    ) : (
    <>
      <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
    </>
    )} 
    </div>
  );
}

export default App;
