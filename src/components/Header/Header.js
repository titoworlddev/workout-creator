import React from 'react';
import './Header.css';

const MENU_OPTIONS = ['Home', 'About', 'Contact', 'Login'];

export default function Header() {
  return (
    <header className="app-header">
      <h1>Workout App</h1>
      <ul>
        {MENU_OPTIONS.map(option => (
          <li>
            <a href={`#${option}`}>{option}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}
