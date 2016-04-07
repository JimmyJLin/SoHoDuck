const React = require('react-native');
const Firebase = require('firebase')
const Resrender = require('./Render/Resrender')
const Animatable = require('react-native-animatable');
const Separator = require('./Helpers/Separator')
const Swipeout = require('react-native-swipeout')
const SearchBar = require('react-native-search-bar')
// const Footer = require('./Footer')
const Tabs = require('react-native-tabs')
const Shopping = require('./Shopping')
const Sites = require('./Sites')
const Tour = require('./Tour')

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
  constructor(props) {
    super(props)
    this.state={
      page: 'second'
    }
  }

  goToRender(index){
    this.props.navigator.push({
      component: Resrender,
      passProps: {resinfo: resinfo[index]}
    })
  }

  handleSearch(){

  }

  goToTour(){
    this.props.navigator.push({
      component: Tour,
    })
  }

  goToSites(){
    this.props.navigator.push({
      component: Sites,
    })
  }

  goToShopping(){
    this.props.navigator.push({
      component: Shopping,
    })
  }

  render(){

    const newArry =[]
    const resInfoArr = Object.keys(this.props.resInfo).map((el)=>{
      newArry.push(this.props.resInfo[el])
    })

    const list = resinfo.map((item, index) => {

    var swipeoutRight = [
      {
        text: <Text style={styles.swipeout} autoClose={true}>Popular: {resinfo[index].Popular}</Text>
      }
    ]

    var swipeoutLeft = [
      {
        component: <Image source={{uri: resinfo[index].Maps}} autoClose={true} width={100} height={140} />
      }
    ]

      return (
        <View key={index}>

        <Swipeout
          right={swipeoutRight}
          left={swipeoutLeft}
          style={styles.swipeoutBtn}>

          <Animatable.View
          animation="zoomInDown"
          style={styles.rowContainer}>

            <TouchableHighlight
              onPress={this.goToRender.bind(this, index)}
              underlayColor="#88D4F5"
              style={styles.box}>

              <View style={styles.ListContainer}>

                <Image
                source={{uri: resinfo[index].Image}}
                style={styles.imgContainer}/>
                <View style={styles.TextContainer}>
                <Text style={styles.buttonText}>{resinfo[index].Name}</Text>
                <Text style={styles.buttonText}>{resinfo[index].Type}</Text>
                </View>
              </View>

            </TouchableHighlight>

          </Animatable.View>

        </Swipeout>

        <Separator />

        </View>
      )
    })


    return (
      <View style={styles.mainContainer}>

        <ScrollView style={{flex: .9}}  >
          <SearchBar
          ref='searchBar'
          placeholder='Search'
          onSearchButtonPress={this.handleSearch.bind(this)}/>
          {list}
        </ScrollView>

        <View style={{flex: .07}}>
        <View style={styles.container}>
         <Tabs selected={this.state.page}
          style={{backgroundColor:'white'}}
          selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>

         <Text name="first"
         onPress={this.goToTour.bind(this)}
         selectedIconStyle={{borderTopWidth:2,borderTopColor:'blue'}}>Tour</Text>

         <Text name="third"
         onPress={this.goToSites.bind(this)}
         selectedIconStyle={{borderTopWidth:2,borderTopColor:'blue'}}>POIs</Text>

         <Text name="fourth"
         onPress={this.goToShopping.bind(this)}
         selectedIconStyle={{borderTopWidth:2,borderTopColor:'blue'}}>Shopping</Text>
          </Tabs>
        </View>

        </View>
      </View>
    )
  }
}


var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2'
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
    marginBottom: 10,
    flexDirection: 'row',
  },
  box: {
    height: 125,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  ListContainer: {
    padding: 15,
    flexDirection: 'row',
  },
  TextContainer: {
    padding: 10,
    flexDirection: 'column',
  },
  imgContainer: {
      marginLeft: 15,
      width: 100,
      height: 100,
      marginRight: 10,
  },
  swipeoutImg: {
      width: 100,
      height: 100,
  },
  swipeout: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  styleButton: {
    flex: 0,
    width: 200,
    height: 200,
  },
  swipeoutBtn: {
    alignItems: 'center',
    backgroundColor: '#b6bec0',
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
  },
})

var resinfo = [
  {Name: "Blue Ribbon Sushi", Address: "97 Sullivan Street New York, NY 10012", Description: "Sushi", Phone: "212-274-0404", Website: "www.blueribbonrestaurants.com", Image: "http://i65.tinypic.com/2ykz3nl.jpg", Maps: "http://i67.tinypic.com/5bitk.jpg", Type: 'Sushi', Latitude: "40.725435", Longitude: "-74.002965", Popular: "Omakase"},
  {Name: "Eileen Special Cheesecake", Address: "17 Cleveland Place, New York, NY 10012", Description: "Cheesecake", Phone: "212-966-5585", Website: "www.eileenscheesecake.com", Image: "http://i64.tinypic.com/55nlvn.jpg", Maps: "http://i65.tinypic.com/fa3ktc.jpg", Type: 'Cheesecake', Latitude: "40.721526", Longitude: "-73.997226", Popular: "Oreo Cookie Cheesecake"},
  {Name: "Pomodoro", Address: "51 Spring Street, New York, NY 10012", Description: "Pizza", Phone: "212-966-9229", Website: "www.thevodkaslice.com", Image: "http://i67.tinypic.com/28s087n.jpg", Maps: "http://i64.tinypic.com/2yvkjkm.jpg", Type: 'Pizza', Latitude: "40.722087", Longitude: "-73.996344", Popular: "Penne Voka"},
  {Name: "Rice to Riches", Address: "37 Spring Street, New York, NY 10012", Description: "Desert", Phone: "212-274-0008", Website: "www.ricetoriches.com", Image: "http://i67.tinypic.com/hrwrj6.jpg", Maps: "http://i65.tinypic.com/o6fllv.jpg", Type: 'Rice Pudding', Latitude: "40.721891", Longitude: "-73.995766", Popular: "Rock & Roll"}]

module.exports = Res;
