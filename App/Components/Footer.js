const React = require('react-native');
const Res = require('./Res')
// const Shopping = require('./Shopping')
// const Sites = require('./Sites')
// const Tour = require('./Tour')
const Tabs = require('react-native-tabs')

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Navigator,
  Text,
  View,
} = React;


class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      page: 'second'
    }
  }

  getCurrentRoutes(){
    var currentRoute = this.props.navigator.navigationContext._currentRoute;
    return currentRoute;
  }

  goToTour(){
    this.props.navigator.push({
      component: Tour,
    })
  }

  goToRes(){
    this.props.navigator.push({
      component: Res,
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
       <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
             selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>

           <Text name="first"
           onPress={this.goToTour.bind(this)}
           selectedIconStyle={{borderTopWidth:2,borderTopColor:'blue'}}>Tour</Text>

           <Text name="second"
           onPress={this.goToRes.bind(this)}
           selectedIconStyle={{borderTopWidth:2,borderTopColor:'blue'}}>Restaurant</Text>

           <Text name="third"
           onPress={this.goToSites.bind(this)}
           selectedIconStyle={{borderTopWidth:2,borderTopColor:'blue'}}>POIs</Text>

           <Text name="fourth"
           onPress={this.goToShopping.bind(this)}
           selectedIconStyle={{borderTopWidth:2,borderTopColor:'blue'}}>Shopping</Text>

       </Tabs>
     </View>
    )
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


module.exports = Footer;
