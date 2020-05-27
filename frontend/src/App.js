import React from 'react';
import './App.css';
import Site from './Site'
import { UserProvider } from './context/userContext'
import { PostsProvider } from './context/postsContext'
import { CategoriesProvider } from './context/categoriesContext'

function App() {

  return (
    <CategoriesProvider>
      <PostsProvider>
        <UserProvider>
          <Site />
        </UserProvider>
      </PostsProvider>
    </CategoriesProvider>
  );
}

export default App;
