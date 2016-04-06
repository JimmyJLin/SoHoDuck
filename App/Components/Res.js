const React = require('react-native');
const Firebase = require('firebase')
const Resrender = require('./Render/Resrender')
const WebView = require('./Helpers/WebView')
const Animatable = require('react-native-animatable');
const ScrollableTabView = require('react-native-scrollable-tab-view')




var {
  Text,
  View,
  NavigatorIOS,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight
} = React;


class Res extends React.Component{
  goToRender(index){
    this.props.navigator.push({
      component: Resrender,
      title: 'Direction',
      passProps: {resinfo: resinfo[index]}
    })
  }

  openPage(address){
    this.props.navigator.push({
      component: WebView,
      title: 'Web View',
      passProps: {address}
    })
  }


  render(){
    const newArry =[]
    const resInfoArr = Object.keys(this.props.resInfo).map((el)=>{
      newArry.push(this.props.resInfo[el])
    })

    const list = resinfo.map((item, index) => {
      return (
        <View key={index}>

        <Animatable.View
        animation="zoomInDown"
        style={styles.rowContainer}>

          <TouchableHighlight
            onPress={this.goToRender.bind(this, index)}
            style={styles.box}>

            <View style={styles.ListContainer}>

              <Image
              source={{uri: resinfo[index].Image}}
              style={styles.imgContainer}/>

              <Text style={styles.buttonText}>{resinfo[index].Name}</Text>

            </View>

          </TouchableHighlight>

        </Animatable.View>

        </View>
      )
    })


    return (
      <View style={styles.mainContainer}>
        <ScrollView style={{flex: .9}}  >
          <Text style={styles.title}> Main </Text>
          {list}
        </ScrollView>

        <View style={{flex: .1}}>
        <Text style={styles.title}>Footer</Text>

        </View>
      </View>
    )
  }
}


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
  buttonText: {
    fontSize: 18,
    color: '#111',
    flexDirection: 'row',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center'
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
  box: {
    height: 100,
    marginBottom: 20,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 3,
      width: 2,
    }
  },
  ListContainer: {
      padding: 10,
      borderWidth: 1,
      flexDirection: 'row',
      borderBottomColor: '#CCC',
      borderColor: 'transparent'
  },
  imgContainer: {
      marginLeft: 15,
      width: 80,
      height: 80,
      marginRight: 10,
  },
})

var resinfo = [
  {Name: "Blue Ribbon Sushi", Address: "97 Sullivan Street New York, NY 10012", Description: "Sushi", Phone: "212-274-0404", Website: "www.blueribbonrestaurants.com", Image: "http://i65.tinypic.com/2ykz3nl.jpg", Type: 'Restaurant', Latitude: "40.725435", Longitude: "-74.002965"},
  {Name: "Eileen Special Cheesecake", Address: "17 Cleveland Place, New York, NY 10012", Description: "Cheesecake", Phone: "212-966-5585", Website: "www.eileenscheesecake.com", Image: "http://i64.tinypic.com/55nlvn.jpg" , Type: 'Restaurant', Latitude: "40.721526", Longitude: "-73.997226"},
  {Name: "Pomodoro", Address: "51 Spring Street, New York, NY 10012", Description: "Pizza", Phone: "212-966-9229", Website: "www.thevodkaslice.com", Image: "http://i67.tinypic.com/28s087n.jpg", Type: 'Restaurant', Latitude: "40.722087", Longitude: "-73.996344"},
  {Name: "Rice to Riches", Address: "37 Spring Street, New York, NY 10012", Description: "Desert", Phone: "212-274-0008", Website: "www.ricetoriches.com", Image: "http://i67.tinypic.com/hrwrj6.jpg", Type: 'Restaurant', Latitude: "40.721891", Longitude: "-73.995766"}]

module.exports = Res;
