const api = {

getRes(){
  const url = 'https://duckrestaurant.firebaseio.com/Rest.json';
  return fetch(url).then((res) => res.json());
}

}

module.exports = api;
