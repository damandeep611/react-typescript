// for the code string inside the bento Grid
export const codeshowcase = `return fetch('https://www.flights-app.com/api/flights/recent', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => response.json())
.then(json => {
  return json;
});`;
