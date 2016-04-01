var api = {

getRes(){
  var url = 'https://sohoduckres.firebaseio.com/.json';
  return fetch(url).then((res) => res.json());
}

}

module.exports = api;
