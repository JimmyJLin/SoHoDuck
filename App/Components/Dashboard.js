const React = require('react-native');
const Res = require('./Res')
const Shopping = require('./Shopping')
const Sites = require('./Sites')
const Tour = require('./Tour')
const api = require('../Utils/api')

const {
  Text,
  View,
  NavigatorIOS,
  Image,
  StyleSheet,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      resinfo: '',
      shoppinginfo: '',
      sitesinfo: '',
      tourinfo: '',
      isLoading: false,
      error: false
    }
  }

  makeBackground(btn){
  var obj = {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1
  }
  if(btn === 0){
    obj.backgroundColor = '#48BBEC';
  } else if (btn === 1){
    obj.backgroundColor = '#E77AAE';
  } else if (btn === 2){
    obj.backgroundColor = '#758BF4';
  } else {
    obj.backgroundColor = '#A20CE8';
  }
  return obj;
  }

  goToTour(){
    this.props.navigator.push({
      component: Tour,
      title: 'Walking Tour'
    })
  }

  goToRes(){
    api.getRes(this.state.resinfo)
      .then((jsonres)=>{
        console.log(jsonres)
        this.props.navigator.push({
          component: Res,
          title: 'Restaurant & Bar',
          passProps: {
            restaurant: jsonres,
            resinfo: this.props.resinfo
          }
        })
      })
  }

  goToSites(){
    this.props.navigator.push({
      component: Sites,
      title: 'Additional POIs'
    })
  }

  goToShopping(){
    this.props.navigator.push({
      component: Shopping,
      title: 'Shopping'
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableHighlight
        style={this.makeBackground(0)}
        onPress={this.goToTour.bind(this)}
        underlayColor="#88D4F5">
          <Text style={styles.buttonText}> Walking Tour</Text>
        </TouchableHighlight>

        <TouchableHighlight
        style={this.makeBackground(1)}
        onPress={this.goToRes.bind(this)}
        underlayColor="#E39EBF">
          <Text style={styles.buttonText}> Resturant / Bar </Text>
        </TouchableHighlight>

        <TouchableHighlight
        style={this.makeBackground(2)}
        onPress={this.goToSites.bind(this)}
        underlayColor="#9BAAF3">
          <Text style={styles.buttonText}> Additional POIs </Text>
        </TouchableHighlight>

        <TouchableHighlight
        style={this.makeBackground(3)}
        onPress={this.goToShopping.bind(this)}
        underlayColor="#A20CE8">
          <Text style={styles.buttonText}> Shopping </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = Dashboard;
