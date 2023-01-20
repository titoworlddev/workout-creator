import React from 'react';
import './FilterLabel.css';

import { stringCapitalize } from '../../utils/extensions/stringCapitalize';

export default function FilterLabel({ name = 'Filter', array = [], id = '' }) {
  return (
    <label className="filter-label">
      <p>{name}:</p>
      <select className={id} id={id} form="filter-form">
        {array.map((elem, index) => (
          <option key={index} value={elem}>
            {stringCapitalize(elem)}
          </option>
        ))}
      </select>
    </label>
  );
}
