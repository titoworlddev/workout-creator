import React from 'react';
// import { Link } from 'wouter';
import './HeaderMobileMenu.css';

const MENU_OPTIONS = ['home', 'exercises', 'creator'];

export default function HeaderMobileMenu() {
  return (
    <ul className="mobile-menu">
      <li className="mobile-menu-button app-btn-primary">
        Menu
        <ul className="mobile-menu-dropdown">
          {MENU_OPTIONS.map((elem, index) => {
            return (
              <li className="app-btn-primary" key={index}>
                {elem.capitalize()}
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
}
