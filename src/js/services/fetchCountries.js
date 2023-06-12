import axios from 'axios';

axios.defaults.baseURL = 'https://restcountries.com/v3.1';

export function fetchCountries(searchQuery) {
  const searchParams = new URLSearchParams({
    fields: 'name,capital,population,flags,languages',
  });

  return axios
    .get(`/name/${searchQuery}?${searchParams}`)
    .then(response => response.data);
}
