const React = require('react-native');
const Res = require('./Res')
const Shopping = require('./Shopping')
const Sites = require('./Sites')
const Tour = require('./Tour')
const Animatable = require('react-native-animatable');
const api = require('../Utils/api')

const {
  Text,
  View,
  NavigatorIOS,
  Image,
  StyleSheet,
  TouchableHighlight
} = React;


class Dashboard extends React.Component{

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
    })
  }

  goToRes(){
    api.getRes()
      .then((res)=>{
        this.props.navigator.push({
          component: Res,
          passProps: {resInfo: res}
        })
        this.setState({
          isLoading: false,
          error: false,
        })
      })
  }

  goToSites(){
    this.props.navigator.push({
      component: Sites,
    })
  }

  goToShopping(){
    this.props.navigator.push({
      component: Shopping,
    })
  }

  render(){

    return (
      <View style={styles.container}>

        <Animatable.View animation="bounceInDown" style={this.makeBackground(0)}>

        <TouchableHighlight
        style={this.makeBackground(0)}
        onPress={this.goToTour.bind(this)}
        underlayColor="#88D4F5">

          <View style={styles.ListContainer}>

            <Image style={styles.backdrop}
            source={require('./img/Main/soho.jpg')}>
              <Text style={styles.headline}> WALKING TOUR</Text>
            </Image>
          </View>

          </TouchableHighlight>

        </Animatable.View>

        <Animatable.View animation="bounceInLeft" style={this.makeBackground(1)}>

          <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRes.bind(this)}
          underlayColor="#E39EBF">

            <View style={styles.ListContainer}>
              <Image  style={styles.backdrop}
              source={require('./img/dashboard/site.jpg')}>
                <Text style={styles.headline}> RESTAURANTS / BARS </Text>
              </Image>
            </View>

          </TouchableHighlight>

        </Animatable.View>

        <Animatable.View animation="bounceInRight" style={this.makeBackground(2)}>

          <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToSites.bind(this)}
          underlayColor="#9BAAF3">

            <View style={styles.ListContainer}>
              <Image  style={styles.backdrop}
              source={require('./img/dashboard/sites.jpg')}>
                <Text style={styles.headline}> ADDITIONAL POIs </Text>
              </Image>
            </View>

          </TouchableHighlight>

        </Animatable.View>

        <Animatable.View animation="bounceInUp" style={this.makeBackground(3)}>

          <TouchableHighlight
          style={this.makeBackground(3)}
          onPress={this.goToShopping.bind(this)}
          underlayColor="#A20CE8">

            <View style={styles.ListContainer}>
              <Image  style={styles.backdrop}
              source={require('./img/dashboard/site2.jpg')}>
                <Text style={styles.headline}> SHOPPING </Text>
              </Image>
            </View>

          </TouchableHighlight>

        </Animatable.View>

      </View>
    )
  }
}


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
  },
  detailsImage: {
    width: 400,
    height: 200,
    backgroundColor: '#eaeaea',
  },
  ListContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000000',
    width: 320
  },
  backdrop: {
    paddingTop: 60,
    width: 400,
    height: 200
  },
  backdropView: {
    height: 120,
    width: 320,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  headline: {
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    fontWeight: 'bold',
  }

});

module.exports = Dashboard;
