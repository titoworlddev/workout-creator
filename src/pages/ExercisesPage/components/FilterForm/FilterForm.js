import React, { useEffect } from 'react';
import './styles.css';

import { PARTS, TARGETS, EQUIPMENTS } from '../../../../services/getExercises';

import FilterLabel from '../../../../components/FilterLabel/FilterLabel';

export default function FilterForm({
  setBodyPart = () => {},
  setTarget = () => {},
  setEquipment = () => {}
}) {
  useEffect(() => {
    const form = document.querySelector('#filter-form');

    form.querySelector('#bodypart-filter').value = 'back';
  }, []);

  function handleFormSubmit() {
    const form = document.querySelector('#filter-form');
    form.addEventListener('submit', e => e.preventDefault());

    setBodyPart(form.querySelector('#bodypart-filter').value);
    setTarget(form.querySelector('#target-filter').value);
    setEquipment(form.querySelector('#equipment-filter').value);
  }

  function handleResetFilters() {
    const form = document.querySelector('#filter-form');

    form.querySelector('#bodypart-filter').value = 'back';
    form.querySelector('#target-filter').value = '- Select -';
    form.querySelector('#equipment-filter').value = '- Select -';
  }

  return (
    <form id="filter-form" onSubmit={handleFormSubmit}>
      <FilterLabel name="Body part" array={PARTS} id="bodypart-filter" />
      <FilterLabel name="Target" array={TARGETS} id="target-filter" />
      <FilterLabel name="Equipment" array={EQUIPMENTS} id="equipment-filter" />

      <div className="form-buttons-container">
        <button
          className="form-submit app-btn-primary"
          onClick={handleResetFilters}>
          🔄️
        </button>

        <button className="form-submit app-btn-primary">Filter</button>
      </div>

      <h3 className="exercises-number">Showing 1342 exercises</h3>
    </form>
  );
}
