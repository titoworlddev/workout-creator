import React, { useState, useEffect } from 'react';
import './Main.css';
import {
  getExercises,
  PARTS,
  TARGETS,
  EQUIPMENTS
} from '../../services/getExercises';
import ExercisesResults from '../ExercisesResults/ExercisesResults';
import { stringCapitalize } from '../../utils/extensions/stringCapitalize';

export default function Main() {
  const [bodyPart, setBodyPart] = useState('');
  const [target, setTarget] = useState('');
  const [equipment, setEquipment] = useState('');
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    setExercises(
      getExercises({
        bodyPart: bodyPart,
        target: target,
        equipment: equipment
      })
    );
  }, [bodyPart, equipment, target]);

  function filterExercises() {
    const form = document.querySelector('#filter-form');

    setBodyPart(form.querySelector('#bodypart-filter').value);
    setTarget(form.querySelector('#target-filter').value);
    setEquipment(form.querySelector('#equipment-filter').value);
  }

  function resetFilters() {
    const form = document.querySelector('#filter-form');

    form.querySelector('#bodypart-filter').value = '- Select -';
    form.querySelector('#target-filter').value = '- Select -';
    form.querySelector('#equipment-filter').value = '- Select -';

    setBodyPart('');
    setTarget('');
    setEquipment('');
  }

  return (
    <main className="app-main">
      <form id="filter-form">
        <label className="bodypart-label">
          <p>Body part:</p>
          <select
            className="bodypart-filter"
            id="bodypart-filter"
            form="filter-form">
            {PARTS.map((elem, index) => (
              <option key={index} value={elem}>
                {stringCapitalize(elem)}
              </option>
            ))}
          </select>
        </label>

        <br />

        <label className="target-label">
          <p>Target:</p>
          <select
            className="target-filter"
            id="target-filter"
            form="filter-form">
            {TARGETS.map((elem, index) => (
              <option key={index} value={elem}>
                {stringCapitalize(elem)}
              </option>
            ))}
          </select>
        </label>

        <br />

        <label className="equipment-label">
          <p>Equipment:</p>
          <select
            className="equipment-filter"
            id="equipment-filter"
            form="filter-form">
            {EQUIPMENTS.map((elem, index) => (
              <option key={index} value={elem}>
                {stringCapitalize(elem)}
              </option>
            ))}
          </select>
        </label>

        <br />

        <div className="form-buttons">
          <div className="form-submit" id="form-submit" onClick={resetFilters}>
            🔄️
          </div>

          <div
            className="form-submit"
            id="form-submit"
            onClick={filterExercises}>
            Filter
          </div>
        </div>
      </form>

      <br />

      <ExercisesResults exercises={exercises} />
    </main>
  );
}
