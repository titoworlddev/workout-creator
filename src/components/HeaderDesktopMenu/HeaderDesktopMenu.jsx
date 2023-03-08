import React from 'react';
import { Link } from 'wouter';
import './HeaderDesktopMenu.css';
import { workoutInfo } from '../../utils/variables';

const MENU_OPTIONS = ['exercises', `creator/${JSON.stringify(workoutInfo)}`];

export default function HeaderDesktopMenu() {
  return (
    <ul className="desktop-menu">
      <Link href="/" key="/">
        <li className="app-btn-primary">Home</li>
      </Link>
      {MENU_OPTIONS.map(option => (
        <Link href={`${option}`} key={option}>
          <li className="app-btn-primary">
            {option.split('/')[0].capitalize()}
          </li>
        </Link>
      ))}
    </ul>
  );
}
