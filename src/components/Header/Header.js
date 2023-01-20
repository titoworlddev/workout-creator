import React from 'react';
import './Header.css';
import { Link } from 'wouter';

import '../../utils/extensions/stringCapitalize';

const MENU_OPTIONS = ['exercises', 'creator'];

export default function Header() {
  return (
    <header className="app-header">
      <h1>Workout Creator</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {MENU_OPTIONS.map(option => (
          <li key={option}>
            <Link href={`${option}`}>{option.capitalize()}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
