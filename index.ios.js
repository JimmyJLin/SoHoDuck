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

// <NavigatorIOS
// style={styles.container}
// initialRoute={{
//   title: 'SoHo Duck',
//   component: Main,
// }} />

class SohoDuck extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'SoHo Duck', component: Main }}
        configureScene={(route) => ({
          ...Navigator.SceneConfigs.HorizontalSwipeJump

        })}
        renderScene={(route, navigator) => {
          if (route.component) {
            return <route.component navigator={navigator} {...route.passProps} />;
          }
        }}
      />

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
