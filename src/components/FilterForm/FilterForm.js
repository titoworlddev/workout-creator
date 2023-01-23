import React, { useEffect } from 'react';
import './styles.css';

import { PARTS, TARGETS, EQUIPMENTS } from '../../services/getExercises';

import FilterLabel from '../FilterLabel/FilterLabel';

export default function FilterForm({
  setBodyPart = () => {},
  setTarget = () => {},
  setEquipment = () => {}
}) {
  useEffect(() => {
    const form = document.querySelector('#filter-form');

    form.querySelector('#bodypart-filter').value = 'back';
  }, []);

  function filterExercises() {
    const form = document.querySelector('#filter-form');

    setBodyPart(form.querySelector('#bodypart-filter').value);
    setTarget(form.querySelector('#target-filter').value);
    setEquipment(form.querySelector('#equipment-filter').value);
  }

  function resetFilters() {
    const form = document.querySelector('#filter-form');

    form.querySelector('#bodypart-filter').value = 'back';
    form.querySelector('#target-filter').value = '- Select -';
    form.querySelector('#equipment-filter').value = '- Select -';

    setBodyPart('back');
    setTarget('');
    setEquipment('');
  }

  return (
    <form id="filter-form">
      <FilterLabel name="Body part" array={PARTS} id="bodypart-filter" />
      <FilterLabel name="Target" array={TARGETS} id="target-filter" />
      <FilterLabel name="Equipment" array={EQUIPMENTS} id="equipment-filter" />

      <div className="form-buttons-container">
        <div
          className="form-submit app-button-primary"
          id="form-submit"
          onClick={resetFilters}>
          🔄️
        </div>

        <div
          className="form-submit app-button-primary"
          id="form-submit"
          onClick={filterExercises}>
          Filter
        </div>
      </div>

      <h3 className="exercises-number">Showing 1342 exercises</h3>
    </form>
  );
}
