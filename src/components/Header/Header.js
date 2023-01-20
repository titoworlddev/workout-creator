import React from 'react';
import './Header.css';
import { stringCapitalize } from '../../utils/extensions/stringCapitalize';

const MENU_OPTIONS = ['home', 'exercises', 'creator'];

export default function Header() {
  return (
    <header className="app-header">
      <h1>Workout Creator</h1>
      <ul>
        {MENU_OPTIONS.map(option => (
          <li key={option}>
            <a href={`${option}`}>{stringCapitalize(option)}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}
