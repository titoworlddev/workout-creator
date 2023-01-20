import React, { useState, useEffect } from 'react';

import './Main.css';
import { getExercises } from '../../services/getExercises';

import ExercisesResults from '../ExercisesResults/ExercisesResults';
import FilterForm from '../FilterForm/FilterForm';

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

  return (
    <main className="app-main">
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
