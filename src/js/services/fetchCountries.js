import axios from 'axios';

axios.defaults.baseURL = 'https://restcountries.com/v3.1';

//!  default syntaxis
// export function fetchCountries(searchQuery) {
//   const searchParams = new URLSearchParams({
//     fields: 'name,capital,population,flags,languages',
//   });

//   return axios
//     .get(`/name/${searchQuery}?${searchParams}`)
//     .then(response => response.data);
// }

//!  async syntaxis
export async function fetchCountries(searchQuery) {
  const searchParams = new URLSearchParams({
    fields: 'name,capital,population,flags,languages',
  });

  const response = await axios.get(`/name/${searchQuery}?${searchParams}`);
  const countries = await response.data;

  return countries;
}
