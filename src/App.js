import React from 'react';
import './App.css';
import ImageList from './Components/ImageList/ImageList';
import { StateProvider } from './StateContext';
import { reducer, initialState } from './StateReducer';

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ImageList />
    </StateProvider>
  );
}

export default App;
