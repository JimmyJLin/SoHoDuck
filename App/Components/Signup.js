const React = require('react-native');
const Dimensions = require('Dimensions');
const windowSize = Dimensions.get('window');


const {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight
} = React;


class Signup extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      isLoading: false,
      error: false,
    }
  }

  handleUsername(event){
    this.setState({
      username: event.nativeEvent.text
    });
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

  handleSubmit(){
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
        <View style={styles.header}>
          <Image style={styles.mark}
          source={{uri: 'http://i.imgur.com/da4G0Io.png'}}/>
        </View>

        <View style={styles.inputs}>
          {/* username section */}
          <View style={styles.inputContainer}>
            <Image style={styles.inputUsername}
            source={{uri: 'http://i.imgur.com/iVVVMRX.png'}}/>
            <TextInput style={[styles.input, styles.whiteFont]}
            placeholder="Username"
            placeholderTextColor="#FFF"
            value={this.state.username}
            onChange={this.handleUsername.bind(this)}/>
          </View>

          <View style={styles.inputContainer}>
            <Image style={styles.inputUsername}
            source={{uri: 'http://i66.tinypic.com/2qltjx3.png'}}/>
            <TextInput style={[styles.input, styles.whiteFont]}
            placeholder="Email"
            placeholderTextColor="#FFF"
            value={this.state.email}
            onChange={this.handleEmail.bind(this)}/>
          </View>

          {/* password section*/}
          <View style={styles.inputContainer}>
            <Image style={styles.inputPassword}
            source={{uri: 'http://i.imgur.com/ON58SIG.png'}}/>
            <TextInput style={[styles.input, styles.whiteFont]}
            placeholder="Password"
            placeholderTextColor="#FFF"
            value={this.state.password}
            onChange={this.handlePassword.bind(this)}/>
          </View>
        </View>

        {/* Sign up*/}
        <View style={styles.signin}>
            <Text style={styles.whiteFont}
            onPress={this.handleSubmit.bind(this)}>Sign Up</Text>
        </View>

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
