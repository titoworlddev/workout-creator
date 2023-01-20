import React from 'react';
import './Header.css';
import { Link } from 'wouter';

import '../../utils/extensions/stringCapitalize';

const MENU_OPTIONS = ['exercises', 'creator'];

export default function Header() {
  return (
    <header className="app-header">
      <Link href="/">
        <h1>Workout Creator</h1>
      </Link>
      <ul>
        <Link href="/">
          <li className="app-button-primary">Home</li>
        </Link>
        {MENU_OPTIONS.map(option => (
          <Link href={`${option}`}>
            <li className="app-button-primary" key={option}>
              {option.capitalize()}
            </li>
          </Link>
        ))}
      </ul>
    </header>
  );
}
