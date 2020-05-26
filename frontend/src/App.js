import React, { useState, useContext } from 'react';
import './App.css';
import Site from './Site'
import { UserProvider } from './context/userContext'
import { PostsProvider } from './context/postsContext'

function App() {

  return (
    <PostsProvider>
      <UserProvider>
        <Site />
      </UserProvider>
    </PostsProvider>
  );
}

export default App;
