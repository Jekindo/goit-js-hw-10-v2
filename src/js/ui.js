import getRefs from './references/get-refs';
import countriesListTpl from '../templates/countries-list.hbs';
import countryInfoTpl from '../templates/country-info.hbs';

const refs = getRefs();

export function clearSearchResults() {
  refs.countriesList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}

export function renderCountriesList(countries) {
  const markup = countriesListTpl(countries);
  refs.countriesList.innerHTML = markup;
}

export function renderCountryInfo(country) {
  const markup = countryInfoTpl(country);
  refs.countryInfo.innerHTML = markup;
}
