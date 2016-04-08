const React = require('react-native');
const Shoppingrender = require('./Render/Shoppingrender')
const Animatable = require('react-native-animatable');
const Separator = require('./Helpers/Separator')
const Swipeout = require('react-native-swipeout')
const Footer = require('./Footer')
const Tabs = require('react-native-tabs')
const SearchBar = require('react-native-search-bar')
const Sites = require('./Sites')
const Tour = require('./Tour')
const Res = require('./Res')


const {
  Text,
  View,
  NavigatorIOS,
  Navigator,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight
} = React;


class Shopping extends React.Component{

  constructor(props) {
    super(props)
    this.state={
      page: 'fourth'
    }
  }

  goToRender(index){
    this.props.navigator.push({
      component: Shoppingrender,
      passProps: {shoppinginfo: shoppinginfo[index]}
    })
  }

  handleSearch(){

  }


  goToTour(){
    this.props.navigator.push({
      component: Tour,
    })
  }

  goToRes(){
    this.props.navigator.push({
      component: Res,
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

    const list = shoppinginfo.map((item, index) => {

    var swipeoutRight = [
      {
        text: <Text style={styles.swipeout} autoClose={true}>Popular: {shoppinginfo[index].Popular}</Text>
      }
    ]

    var swipeoutLeft = [
      {
        component: <Image source={{uri: shoppinginfo[index].Maps}} autoClose={true} width={100} height={140} />
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
              source={{uri: shoppinginfo[index].Image}}
              style={styles.imgContainer}/>

              <View style={styles.TextContainer}>
              <Text style={styles.buttonText}>{shoppinginfo[index].Name}</Text>
              <Text style={styles.buttonText}>{shoppinginfo[index].Type}</Text>
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

        <ScrollView style={styles.scrollContainer}  >
          <SearchBar
          ref='searchBar'
          placeholder='Search'
          onSearchButtonPress={this.handleSearch.bind(this)}/>
          {list}
        </ScrollView>

        <View style={{flex: .07}}>

        </View>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 90,
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
  scrollContainer: {
    flex: .9,
    marginTop: -90,
  }
})

const shoppinginfo = [
  {Name: "Uniqlo SoHo", Address: "546 Broadway, New York, NY 10012", Description: "Clothing retailer producing a collection of casualwear & accessories for men, women & children.", Phone: "877-486-4756", Website: "www.uniqlo.com", Image: "http://i64.tinypic.com/et9zmh.jpg", Maps: "http://i67.tinypic.com/5bitk.jpg", Type: 'Clothing',  Latitude: "40.723445", Longitude: "-73.998073", Popular: "Heat Tech"},
  {Name: "Pearl River Mart", Address: "17 Cleveland Place, New York, NY 10012", Description: "Eclectic emporium with 3-floors of Chinese apparel, accessories, housewares & furniture", Phone: "800-878-2446", Website: "www.pearlriver.com", Image: "http://i65.tinypic.com/dgqibs.jpg", Maps: "http://i67.tinypic.com/5bitk.jpg", Type: 'Suvenior',  Latitude: "40.721542", Longitude: "-74.000468", Popular: "Dragon Boat"},
  {Name: "Topshop", Address: "478 Broadway, New York, NY 10012", Description: "Topshop is a British multinatioal fashion retailer of clothing, shoes, make-up and accessories - of which some 300 are in the UK", Phone: "866-853-8559", Website: "us.topshop.com", Image: "http://i67.tinypic.com/w2f380.jpg", Maps: "http://i67.tinypic.com/5bitk.jpg", Type: 'UK Design',  Latitude: "40.721398", Longitude: "-73.999888", Popular: "European Look"},
  {Name: "Prada", Address: "575 Broadway, New York, NY 10012", Description: "Retailer of upscale apparel, handbags, fragrances & more from the Italian designer", Phone: "212-334-8888", Website: "www.prada.com", Image: "http://i64.tinypic.com/3339xyu.jpg", Maps: "http://i67.tinypic.com/5bitk.jpg", Type: 'Luxury Bag', Latitude: "40.724450", Longitude: "-73.997868", Popular: "Prada"},
  {Name: "Bloomingdale's", Address: "504 Broadway, New York, NY 10012", Description: "Upscale department store for apparel, accessories & cosmetics.", Phone: "212-729-5900", Website: "locations.bloomingdale.com/soho", Image: "http://i67.tinypic.com/2jwit5.jpg", Maps: "http://i68.tinypic.com/2cik9vn.jpg", Type: 'Upscale Department Store', Latitude: "40.724450", Longitude: "-73.997868", Popular: "Apparel"}]

module.exports = Shopping;
