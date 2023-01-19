import React from 'react';
import './Main.css';

export default function Main() {
  return (
    <main className="app-main">
      <section className="exercices-container">
        {Array(20)
          .fill(null)
          .map((_, index) => (
            <p>{index}</p>
          ))}
      </section>
    </main>
  );
}
