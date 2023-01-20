import exercises from '../../assets/json/api.json';

const PARTS = [
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

const TARGETS = [
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

const EQUIPMENTS = [
  'assisted',
  'band',
  'barbell',
  'body weight',
  'bosu ball',
  'cable',
  'dumbbell',
  'elliptical machine',
  'ez barbell',
  'hammer',
  'kettlebell',
  'leverage machine',
  'medicine ball',
  'olympic barbell',
  'resistance band',
  'roller',
  'rope',
  'skierg machine',
  'sled machine',
  'smith machine',
  'stability ball',
  'stationary bike',
  'stepmill machine',
  'tire',
  'trap bar',
  'upper body ergometer',
  'weighted',
  'wheel roller'
];

export const getExercises = ({
  selector = '',
  bodyPart = '',
  target = '',
  equipment = ''
} = {}) => {
  return exercises['exercises']
    .filter(exercise => {
      if (PARTS.includes(bodyPart)) {
        return exercise.bodyPart === bodyPart;
      }
      return exercise;
    })
    .filter(exercise => {
      if (TARGETS.includes(target)) {
        return exercise.target === target;
      }
      return exercise;
    })
    .filter(exercise => {
      if (EQUIPMENTS.includes(equipment)) {
        return exercise.equipment === equipment;
      }
      return exercise;
    })
    .filter(exercise => {
      if (selector.length > 0) {
        return Object.entries(exercise).some(
          ([_, value]) => value === selector
        );
      }
      return exercise;
    });
};
