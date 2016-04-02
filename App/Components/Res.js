const React = require('react-native');

var {
  Text,
  View,
  NavigatorIOS,
  Image,
  ScrollView,
  StyleSheet,
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
})

class Res extends React.Component{
  gotToRender(){

  }

  render(){
    var resinfo = this.props.resinfo;
    var list = resinfo.map((item, index))
    console.log(list)
    return (
      <View key={index} style={styles.mainContainer}>
        <View style={{flex: .8}}  >
          <TouchableHighlight
            onPress={this.goToRender.bind(this)}
            underlayColor="88D4F5">
            <Text style={styles.title}></Text>
          </TouchableHighlight>
        </View>

        <View style={{flex: .2}}>
        <Text style={styles.title}>Footer</Text>
        </View>
      </View>
    )
  }
}

module.exports = Res;
