import { Notify } from 'notiflix/build/notiflix-notify-aio';

const URL = 'https://restcountries.com/v3.1/name/';

export function fetchCountries(name) {
  return fetch(`${URL}${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
      if (!response.ok) {
        Notify.failure('Oops, there is no country with that name');
      }
      return response.json();
    })
    .then(countries => {
      if (countries.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }

      console.log(countries);
      return countries;
    })
    .catch(error => {
      console.log(error);
    });
}
