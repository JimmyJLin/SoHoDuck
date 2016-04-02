const React = require('react-native');
const Main = require('./App/Components/Main');
const Firebase = require('firebase')

const {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} = React;

class SohoDuck extends Component {
  constructor(props){
    super(props);
    const myFirebaseRef = new Firebase('https://duckrestaurant.firebaseio.com')

    this.itemsRef = myFirebaseRef.child('items')

    this.items = []
  }


  render() {
    console.log(this.itemsRef)
    return (
      <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'SoHo Duck',
        component: Main,
      }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});

AppRegistry.registerComponent('SohoDuck', () => SohoDuck);
