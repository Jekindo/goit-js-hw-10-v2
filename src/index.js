import debounce from 'lodash.debounce';
import getRefs from './js/references/get-refs';
import { fetchCountries } from './js/services/fetchCountries';
import Notiflix from 'notiflix';
import * as UI from './js/ui';

const refs = getRefs();

refs.searchInput.addEventListener('input', debounce(onSearch, 300));

function onSearch(evt) {
  const searchQuery = evt.target.value.trim();

  UI.clearSearchResults();

  if (searchQuery === '') {
    return;
  }

  fetchCountries(searchQuery)
    .then(countries => {
      const countriesLength = countries.length;

      if (countriesLength > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (countriesLength >= 2 && countriesLength <= 10) {
        UI.renderCountriesList(countries);
      } else {
        UI.renderCountryInfo(countries[0]);
      }
    })
    .catch(handleError);
}

function handleError() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
