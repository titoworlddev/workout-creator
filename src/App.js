import './App.css';
import { Route } from 'wouter';

import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
import CreatorPage from './pages/CreatorPage/CreatorPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/exercises">
        <ExercisesPage />
      </Route>
      <Route path="/creator">
        <CreatorPage />
      </Route>
    </>
  );
}

export default App;
