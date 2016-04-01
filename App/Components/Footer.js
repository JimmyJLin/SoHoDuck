const React = require('react-native');
const Res = require('./Res')
const Shopping = require('./Shopping')
const Sites = require('./Sites')
const Tour = require('./Tour')

var {
  Text,
  View,
  MapView,
  NavigatorIOS,
  Image,
  ScrollView,
  StyleSheet,
  PropTypes,
  TabBarIOS,
  Component,
  TouchableOpacity,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FF530D'
  },
  container: {
    flex: .2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFCF7'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

class Footer extends React.Component {

  goToTour(){
    this.props.navigator.push({
      component: Tour,
      title: 'Walking Tour'
    })
  }

  goToRes(){
    this.props.navigator.push({
      component: Res,
      title: 'Resturant & Bar'
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
  constructor(props) {
    super(props)
    this.state={
      selectedTab: 'welcome'
    }
  }
  render(){
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>

      <TabBarIOS
      selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.seelctedTab === 'welcome'}
          icon={{uri: 'featured'}}
          onPress={this.goToTour}>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.seelctedTab === 'welcome'}
          icon={{uri: 'featured'}}
          onPress={this.goToRes}>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.seelctedTab === 'welcome'}
          icon={{uri: 'featured'}}
          onPress={this.goToSites}>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.seelctedTab === 'welcome'}
          icon={{uri: 'featured'}}
          onPress={this.goToShopping}>
        </TabBarIOS.Item>

      </TabBarIOS>
    </View>
    )
  }
}


module.exports = Footer;
