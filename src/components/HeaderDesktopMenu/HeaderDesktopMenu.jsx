import React from 'react';
import { Link } from 'wouter';
import './HeaderDesktopMenu.css';
import { MENU_OPTIONS } from '../../utils/variables';

export default function HeaderDesktopMenu() {
  return (
    <ul className="desktop-menu">
      <Link href="/">
        <li className="app-btn-primary">Home</li>
      </Link>
      {MENU_OPTIONS.map(option => (
        <Link href={option} key={option}>
          <li className="app-btn-primary">{option.capitalize()}</li>
        </Link>
      ))}
    </ul>
  );
}
