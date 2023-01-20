import exercises from '../../assets/json/api.json';

export const getExercises = () => {
  return exercises['exercises'];
};

export const getExercisesByBodyPart = (bodyPart = '') => {
  const parts = [
    'back',
    'cardio',
    'chest',
    'lower arms',
    'lower legs',
    'neck',
    'shoulders',
    'upper arms',
    'upper legs',
    'waist'
  ];

  return exercises['exercises'].filter(exercise => {
    if (parts.includes(bodyPart)) {
      return exercise.bodyPart === bodyPart;
    }
    return null;
  });
};

export const getExercisesByTarget = (target = '') => {
  const targets = [
    'abductors',
    'abs',
    'adductors',
    'biceps',
    'calves',
    'cardiovascular system',
    'delts',
    'forearms',
    'glutes',
    'hamstrings',
    'lats',
    'levator scapulae',
    'pectorals',
    'quads',
    'serratus anterior',
    'spine',
    'traps',
    'triceps',
    'upper back'
  ];

  return exercises['exercises'].filter(exercise => {
    if (targets.includes(target)) {
      return exercise.target === target;
    }
    return null;
  });
};
