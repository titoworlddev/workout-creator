import React from 'react';
import HomeIntro from '../HomeIntro/HomeIntro';

export default function HomeMain() {
  return (
    <main className="home-main">
      <div className="alpha-version-message">
        <p>
          This is still the alpha version, it is not the final product, the
          design will change and certain functionalities will also change, in
          addition to others that will be added. If there is any operating
          error, please excuse us, it will be fixed as soon as possible.
        </p>
      </div>
      <br />
      <HomeIntro />
    </main>
  );
}
