export const getExercises = async (path = '') => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1debb555b1msh36ba7d5d0a36329p1d231cjsnf77391a40b35',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  const API_URL = `https://exercisedb.p.rapidapi.com/exercises${path}`;

  return await fetch(API_URL, options).then(res => res.json());
};
