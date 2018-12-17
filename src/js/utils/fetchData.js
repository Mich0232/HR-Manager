const prefix = 'http://127.0.0.1:8000/'

export const fetchData = (url = '', method = 'GET', body = undefined, query = '') => {
  return fetch(prefix + 'api/' + url + query, {
    method: method,
    body: body
    })
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    const data = JSON.stringify(myJson.results[0].name);
    return data
  })
  .catch((e) => {
    console.log(e);
  });
}