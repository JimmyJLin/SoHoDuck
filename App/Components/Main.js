const React = require('react-native');
const Dimensions = require('Dimensions');
const windowSize = Dimensions.get('window');
const Dashboard = require('./Dashboard')
const Signup = require('./Signup')
const Firebase = require('firebase');
const Animatable = require('react-native-animatable');
const Video = require('react-native-video').default;

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


class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      error: false,
    }
  }

  goToDashboard(){
    this.props.navigator.push({
      component: Dashboard,
    })
  }

  goToSignup(){
    this.props.navigator.push({
      component: Signup,
    })
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

  handleSignin(){
    ref.authWithPassword({
      email: this.state.email,
      password: this.state.password
    }, (error, authData) =>{
      if (error) {
        console.log('Login Failed!', error)
      } else {
        this.props.navigator.resetTo({
          component: Dashboard,
          })
        }
      }
    )
    this.setState({
      isLoading: true,
    });
  }

  render(){
    return (
      <View style={styles.container}>

      {/* Background Image */}
        <Image style={styles.bg}
        source={require('./img/Main/Background.jpg')}/>

        {/* Header Check Mark */}
        <Animatable.View animation="bounceInDown" easing="ease-in" style={styles.header}>
            <Image style={styles.mark}
            source={require('./img/Main/Logo.png')}/>
        </Animatable.View>

        <View style={styles.welcomeContainer}>
          <Animatable.Text style={styles.title} animation="slideInDown" iterationCount={50} direction="alternate"> Welcome to SoHoDuck! </Animatable.Text>
        </View>

        {/* username section */}
        <View style={styles.inputs}>
        <Animatable.View animation="bounceInLeft" style={styles.inputContainer}>
          <Image style={styles.inputUsername}
          source={require('./img/Main/email.png')}/>
          <TextInput style={[styles.input, styles.whiteFont]}
          placeholder="Email"
          placeholderTextColor="#FFF"
          value={this.state.email}
          onChange={this.handleEmail.bind(this)}/>
        </Animatable.View>

        {/* password section*/}
        <Animatable.View animation="bounceInRight" style={styles.inputContainer}>
          <Image style={styles.inputPassword}
          source={require('./img/Main/pass.jpg')}/>
          <TextInput style={[styles.input, styles.whiteFont]}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#FFF"
          value={this.state.password}
          onChange={this.handlePassword.bind(this)}/>
        </Animatable.View>

          {/* forgot password */}
          <View style={styles.forgotContainer}>
            <Text style={styles.greyFont}>Forgot Password</Text>
          </View>
        </View>

        {/* Sign In*/}
        <Animatable.View animation="bounceInLeft" style={styles.signin}>
          <Text style={styles.buttonText}
          onPress={this.handleSignin.bind(this)}
          underlayColor="#E39EBF">Sign In</Text>
        </Animatable.View>

        {/* Guest Login*/}
        <Animatable.View animation="bounceInRight" style={styles.signin}>
          <Text style={styles.buttonText}
          onPress={this.goToDashboard.bind(this)}
          underlayColor="#E39EBF">Start Quacking</Text>
        </Animatable.View>

        {/*Sign up*/}
        <Animatable.View animation="bounceInUp" style={styles.signup}>
          <Text style={styles.greyFont}>Don't have an account?<Text style={styles.whiteFont} onPress={this.goToSignup.bind(this)}>  Sign Up</Text></Text>
        </Animatable.View>

      </View>

    )
  }
}


const styles = StyleSheet.create({
    container: {
      marginTop: 20,
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
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
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
      alignItems: 'center',
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
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
    buttonText: {
      fontSize: 20,
      color: 'white',
      alignSelf: 'center'
    },
})

module.exports = Main;
