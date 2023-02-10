import React from 'react';
import './FilterLabel.css';

export default function FilterLabel({ name = 'Filter', array = [], id = '' }) {
  return (
    <>
      <label className="filter-label">
        <p>{name}:</p>
        <select className={id} id={id} form="filter-form">
          {array.map((elem, index) => {
            return (
              <option key={index} value={elem}>
                {elem.capitalize()}
              </option>
            );
          })}
        </select>
      </label>
      <br />
    </>
  );
}
