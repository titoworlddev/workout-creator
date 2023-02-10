import React, { useEffect, useState } from 'react';
// import { Link } from 'wouter';
import './HeaderMobileMenu.css';
import { Link } from 'wouter';

const MENU_OPTIONS = ['exercises', 'creator'];

export default function HeaderMobileMenu() {
  return (
    <ul className="mobile-menu">
      <li className="mobile-menu-btn app-btn-primary">
        Menu
        <ul className="mobile-menu-dropdown">
          <Link href="/">
            <li className="app-btn-primary">Home</li>
          </Link>
          {MENU_OPTIONS.map((elem, index) => (
            <Link href={`${elem}`} key={index}>
              <li className="app-btn-primary">{elem.capitalize()}</li>
            </Link>
          ))}
        </ul>
      </li>
    </ul>
  );
}
