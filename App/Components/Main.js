var React = require('react-native');

var {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight
} = React;


var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
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
  imageContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'

  },
  image: {
    flex: 1,
    alignItems: 'stretch'

  }
})


class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      error: false
    }
  }


  goToDashboard(){
    this.props.navigator.push({
      component: Dashboard,
      title: 'Dashboard'
    })
  }

  render(){
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Welcome to SoHoDuck! </Text>

        <TouchableHighlight
        style={styles.button}
        onPress={this.goToDashboard.bind(this)}
        underlayColor="white">
          <Text style={styles.buttonText}> START QUACKING!</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

module.exports = Main;
