const React = require('react-native');
const Firebase = require('firebase')


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
    marginTop: 10,
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
  goToRender(){

  }

  render(){


    var resinfo = [
    {Name: "Blue Ribbon Sushi", Address: "97 Sullivan Street, New York, NY 10012", Description: "Sushi", Phone: "212-274-0404", Website: "www.blueribbonrestaurants.com"},
    {Name: "Eileen Special Cheesecake", Address: "17 Cleveland Place, New York, NY 10012", Description: "Cheesecake", Phone: "212-966-5585", Website: "www.eileenscheesecake.com"},
    {Name: "Pomodoro", Address: "51 Spring Street, New York, NY 10012", Description: "Pizza", Phone: "212-966-9229", Website: "www.thevodkaslice.com"},
    {Name: "Rice to Riches", Address: "37 Spring Street, New York, NY 10012", Description: "Desert", Phone: "212-274-0008", Website: "www.ricetoriches.com"}]

    console.log('Res resinfo', resinfo)

    var list = resinfo.map((item, index) => {
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={this.goToRender.bind(this)}
              underlayColor="transparent"
              style={styles.button}>
              <Text style={styles.buttonText}>{resinfo[index].Name}</Text>
            </TouchableHighlight>

          </View>

        </View>
      )
    })


    return (
      <View style={styles.mainContainer}>
        <ScrollView style={{flex: .8}}  >
          <Text style={styles.title}> Main </Text>
          {list}
        </ScrollView>

        <View style={{flex: .2}}>
        <Text style={styles.title}>Footer</Text>
        </View>
      </View>
    )
  }
}

module.exports = Res;
