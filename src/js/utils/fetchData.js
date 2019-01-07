import { prefix } from '../../config';

export const fetchData = (url = '', method = 'GET', body = undefined, query = '') => {
  return fetch(prefix + 'api/' + url + '/' + query, {
    method: method,
    body: body
    })
  .then(function(response) {
    const { ok, statusText } = response;
    if (ok) {
      return response.json();
    } else {
      console.log(statusText);
    }
  })
  .then(function(data) {
    return data
  })
  .catch((e) => {
    console.log(e);
  });
};
