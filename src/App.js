import React from 'react';
import './App.css';
import { Route } from 'wouter';

import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
import CreatorPage from './pages/CreatorPage/CreatorPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  localStorage.setItem(
    'workoutInfo',
    JSON.stringify({ workoutName: 'Desde App', workoutDays: [] })
  );

  return (
    <>
      <Route path="/" component={HomePage} />
      <Route path="/exercises" component={ExercisesPage} />
      <Route path="/creator" component={CreatorPage} />
    </>
  );
}

export default App;
