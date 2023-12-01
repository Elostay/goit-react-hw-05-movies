// import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// const key = 'ca07cfa0a72b49d166a90c6c0253cddf';

// const params = new URLSearchParams({
//   api_key: key,
// });

// export const getMovies = async typeOfRequest => {
//   const response = await axios.get(`${typeOfRequest}?${params}`);
//   return response.data.results;
// };

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getMovies = async (typeOfRequest, params = '') => {
  const response = await axios.get(
    `${typeOfRequest}?api_key=ca07cfa0a72b49d166a90c6c0253cddf${params}`
  );
  return response.data;
};
