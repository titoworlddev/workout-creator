export const getExercises = async (path = '') => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0c41a301a7mshbd8ace165090d9ap12b1a5jsn2b2fef17b576',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  const API_URL = 'https://exercisedb.p.rapidapi.com/exercises';

  return await fetch(API_URL, options)
    .then(response => response.json())
    .catch(err => console.error(err));
};
