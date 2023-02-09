import React from 'react';
import { Link } from 'wouter';
import './HeaderDesktopMenu.css';

const MENU_OPTIONS = ['exercises', 'creator'];

export default function HeaderDesktopMenu() {
  return (
    <ul className="desktop-menu">
      <Link href="/" key="/">
        <li className="app-btn-primary">Home</li>
      </Link>
      {MENU_OPTIONS.map(option => (
        <Link href={`${option}`} key={option}>
          <li className="app-btn-primary">{option.capitalize()}</li>
        </Link>
      ))}
    </ul>
  );
}
