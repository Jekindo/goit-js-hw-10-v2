export default function getRefs() {
  return {
    searchInput: document.getElementById('search-box'),
    countriesList: document.querySelector('.js-countries-list'),
    countryInfo: document.querySelector('.js-country-info'),
  };
}
