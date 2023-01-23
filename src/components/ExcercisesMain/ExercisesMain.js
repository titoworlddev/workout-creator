import React, { useState, useEffect } from 'react';
import './styles.css';

import { getExercises } from '../../services/getExercises';

import ExercisesResults from '../ExercisesResults/ExercisesResults';
import FilterForm from '../FilterForm/FilterForm';

export default function ExercisesMain() {
  const [bodyPart, setBodyPart] = useState('back');
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

    const exercisesNumber = document.querySelector('.exercises-number');
    if (exercises.length === 0)
      exercisesNumber.textContent = 'No exercises found !';
    else exercisesNumber.textContent = `Showing ${exercises.length} exercises`;
  }, [bodyPart, equipment, exercises.length, target]);

  return (
    <main className="exercises-main">
      <FilterForm
        setBodyPart={setBodyPart}
        setTarget={setTarget}
        setEquipment={setEquipment}
      />

      <br />

      <ExercisesResults exercises={exercises} />
    </main>
  );
}
