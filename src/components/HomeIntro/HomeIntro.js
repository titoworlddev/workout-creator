import React from 'react';
import { Link } from 'wouter';

export default function HomeIntro() {
  return (
    <>
      <h2>Dou you want to create your own exercises?</h2>
      <br />
      <p>
        Are you the type of person who likes to train in his own way?
        <br /> <br />
        Have you always wanted to create your workouts but didn't have where?
        <br /> <br />
        You can do it here. Just click the button below and start creating your
        own exercises with the <strong>Workout Creator.</strong>
      </p>
      <br />
      <button className="app-button-primary app-button-primary-big">
        <Link href="/creator">Start creating</Link>
      </button>
    </>
  );
}