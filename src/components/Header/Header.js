import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'wouter';

import '../../utils/extensions/stringCapitalize';

const MENU_OPTIONS = ['exercises', 'creator'];

export default function Header() {
  const [headerTitle, setHeaderTitle] = useState('Workout Creator');

  const setTitleText = () => {
    window.innerWidth > 1030
      ? setHeaderTitle('Workout Creator')
      : setHeaderTitle('WC');
  };

  useEffect(() => {
    setTitleText();
    window.addEventListener('resize', () => {
      setTitleText();
    });
  }, []);

  return (
    <header className="app-header">
      <Link href="/">
        <h1>{headerTitle}</h1>
      </Link>
      <ul>
        <Link href="/" key="/">
          <li className="app-btn-primary">Home</li>
        </Link>
        {MENU_OPTIONS.map(option => (
          <Link href={`${option}`} key={option}>
            <li className="app-btn-primary">{option.capitalize()}</li>
          </Link>
        ))}
      </ul>
    </header>
  );
}
