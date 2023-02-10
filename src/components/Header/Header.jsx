import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'wouter';

import '../../utils/extensions/stringCapitalize';
import HeaderDesktopMenu from '../HeaderDesktopMenu/HeaderDesktopMenu';
import HeaderMobileMenu from '../HeaderMobileMenu/HeaderMobileMenu';

export default function Header() {
  const [headerTitle, setHeaderTitle] = useState(
    window.innerWidth > 1024 ? 'Workout Creator' : 'WC'
  );

  const setTitleText = () => {
    window.innerWidth > 1024
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
      {window.innerWidth > 1024 ? <HeaderDesktopMenu /> : <HeaderMobileMenu />}
    </header>
  );
}
