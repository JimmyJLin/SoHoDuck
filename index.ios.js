const React = require('react-native');
const Main = require('./App/Components/Main');

const {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NavigatorIOS,
  Navigator,
  View
} = React;



class SohoDuck extends Component {
  render() {
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
