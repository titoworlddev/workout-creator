import React, { useState, useEffect } from 'react';
import './ExercisesMain.css';

import { getExercises } from '../../../../services/getExercises';
import FilterForm from '../../../../components/FilterForm/FilterForm';
import ExercisesResults from '../../../../components/ExercisesResults/ExercisesResults';
import { defaultExercise } from '../../../../utils/variables';

export default function ExercisesMain() {
  const [bodyPart, setBodyPart] = useState('back');
  const [target, setTarget] = useState('');
  const [equipment, setEquipment] = useState('');
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setExercises(
      getExercises({
        bodyPart: bodyPart,
        target: target,
        equipment: equipment
      })
    );
    setIsLoading(false);

    const exercisesNumber = document.querySelector('.exercises-number');
    if (exercises.length === 0)
      exercisesNumber.textContent = 'No exercises found !';
    else exercisesNumber.textContent = `Showing ${exercises.length} exercises`;
  }, [bodyPart, equipment, exercises.length, target]);

  return (
    <main className="exercises-main">
      <div className="alpha-version-message">
        <p>
          This is still the alpha version, it is not the final product, the
          design will change and certain functionalities will also change, in
          addition to others that will be added. If there is any operating
          error, please excuse us, it will be fixed as soon as possible.
        </p>
      </div>
      <br />
      <FilterForm
        setBodyPart={setBodyPart}
        setTarget={setTarget}
        setEquipment={setEquipment}
      />

      <br />

      {isLoading ? (
        <ExercisesResults exercises={Array(20).fill(defaultExercise)} />
      ) : (
        <ExercisesResults exercises={exercises} />
      )}
    </main>
  );
}
