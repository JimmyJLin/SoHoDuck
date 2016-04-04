const React = require('react-native');
const Dimensions = require('Dimensions');
const windowSize = Dimensions.get('window');
const Firebase = require('firebase');
const Main = require('./Main')
const Dashboard = require('./Dashboard')
const Animatable = require('react-native-animatable');


const {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight
} = React;

const ref = new Firebase('https://duckrestaurant.firebaseio.com/')
const getRef = new Firebase('https://duckrestaurant.firebaseio.com/rusers')
const rusers = ref.child('rusers')

class Signup extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      error: false,
    }
  }

  handleEmail(event){
    this.setState({
      email: event.nativeEvent.text
    });
  }

  handlePassword(event){
    this.setState({
      password: event.nativeEvent.text
    });
  }

  handleSignup(){
    ref.createUser({
      email: this.state.email,
      password: this.state.password
    }, (error, userData) => {
      if(error) {
        console.log('Error creating user: ', error);
      } else {
        console.log("Signup Success")
        this.props.navigator.resetTo({
          component: Dashboard,
          title: 'Dashboard'
          })
        }
      }
    )
    this.setState({
      isLoading: true,
    });
  }

  render(){
    return(
      <View  style={styles.container}>
        {/* Background Image */}
        <Image style={styles.bg}
        source={{uri: 'http://i.imgur.com/xlQ56UK.jpg'}}/>

        {/* Header Check Mark */}
        <Animatable.View animation="bounceInDown" style={styles.header}>
          <Image style={styles.mark}
          source={{uri: 'http://i.imgur.com/da4G0Io.png'}}/>
        </Animatable.View>

        <View style={styles.inputs}>

          <Animatable.View animation="bounceInRight" style={styles.inputContainer}>
            <Image style={styles.inputUsername}
            source={{uri: 'http://i66.tinypic.com/2qltjx3.png'}}/>
            <TextInput style={[styles.input, styles.whiteFont]}
            placeholder="Email"
            placeholderTextColor="#FFF"
            value={this.state.email}
            onChange={this.handleEmail.bind(this)}/>
          </Animatable.View>


          {/* password section*/}
          <Animatable.View animation="bounceInLeft" style={styles.inputContainer}>
            <Image style={styles.inputPassword}
            source={{uri: 'http://i.imgur.com/ON58SIG.png'}}/>
            <TextInput style={[styles.input, styles.whiteFont]}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#FFF"
            value={this.state.password}
            onChange={this.handlePassword.bind(this)}/>
          </Animatable.View>

        </View>

        {/* Sign up*/}
        <Animatable.View animation="bounceInUp" style={styles.signin}>
          <Text style={styles.whiteFont}
          onPress={this.handleSignup.bind(this)}>Sign Up</Text>
        </Animatable.View>

        {/* Emptied Space */}
        <View style={styles.forgotContainer}>
          <Text style={styles.greyFont}></Text>
        </View>
      </View>
    )
  }
}


var styles = StyleSheet.create({
    container: {
      marginTop: 60,
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    bg: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: windowSize.width,
      height: windowSize.height
    },
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .5,
      backgroundColor: 'transparent'
    },
    mark: {
      width: 150,
      height: 150
    },
    signin: {
      backgroundColor: '#FF3366',
      padding: 20,
      marginBottom: 10,
      alignItems: 'center'
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .15
    },
    inputs: {
      marginTop: 10,
      marginBottom: 10,
      flex: .25
    },
    inputPassword: {
      marginLeft: 15,
      width: 20,
      height: 21
    },
    inputUsername: {
      marginLeft: 15,
      width: 20,
      height: 20
    },
    inputContainer: {
      padding: 10,
      borderWidth: 1,
      borderBottomColor: '#CCC',
      borderColor: 'transparent'
    },
    input: {
      position: 'absolute',
      left: 61,
      top: 12,
      right: 0,
      height: 20,
      fontSize: 14
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 15,
    },
    greyFont: {
      color: '#D8D8D8'
    },
    whiteFont: {
      color: '#FFF'
    },
    title: {
      marginBottom: 10,
      fontSize: 25,
      textAlign: 'center',
      color: '#fff'
    },
})

module.exports = Signup;
