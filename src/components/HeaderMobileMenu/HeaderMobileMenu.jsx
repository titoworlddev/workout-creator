import React from 'react';
import './HeaderMobileMenu.css';
import { Link } from 'wouter';
import { MENU_OPTIONS } from '../../utils/variables';

export default function HeaderMobileMenu() {
  return (
    <ul className="mobile-menu">
      <li className="mobile-menu-btn app-btn-primary">
        Menu
        <ul className="mobile-menu-dropdown">
          <Link href="/">
            <li className="app-btn-primary">Home</li>
          </Link>
          {MENU_OPTIONS.map((option, index) => (
            <Link href={option} key={index}>
              <li className="app-btn-primary">{option.capitalize()}</li>
            </Link>
          ))}
        </ul>
      </li>
    </ul>
  );
}
