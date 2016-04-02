var api = {

getRes(){
  var url = 'https://duckrestaurant.firebaseio.com/.json';
  return fetch(url).then((res) => res.json());
}

}

module.exports = api;
