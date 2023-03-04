import React, { useState, useEffect } from 'react';
import './ChooseExercisesView.css';

import FilterForm from '../FilterForm/FilterForm';
import ChooseExercisesResults from '../ChooseExercisesResults/ChooseExercisesResults';

import { getExercises } from '../../services/getExercises';

export default function ChooseExercisesView({ setState = () => {} }) {
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
    exercises.length === 0
      ? (exercisesNumber.textContent = 'No exercises found !')
      : (exercisesNumber.textContent = `Showing ${exercises.length} exercises`);
  }, [bodyPart, equipment, exercises.length, target]);

  return (
    <section className="choose-exercises-view">
      <FilterForm
        setBodyPart={setBodyPart}
        setTarget={setTarget}
        setEquipment={setEquipment}
      />

      <br />

      <ChooseExercisesResults exercises={exercises} setState={setState} />
    </section>
  );
}
