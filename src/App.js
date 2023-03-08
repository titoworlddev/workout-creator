import React from 'react';
import './App.css';
import { Route } from 'wouter';

import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
import CreatorPage from './pages/CreatorPage/CreatorPage';
import HomePage from './pages/HomePage/HomePage';
import { initalizeLocalStorage } from './utils/functions/saveAtLocalStorage';

function App() {
  initalizeLocalStorage();

  return (
    <>
      <Route path="/" component={HomePage} />
      <Route path="/exercises" component={ExercisesPage} />
      <Route path="/creator/:workout" component={CreatorPage} />
    </>
  );
}

export default App;
