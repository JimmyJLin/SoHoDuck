const React = require('react-native');
const Sitesrender = require('./Render/Sitesrender')
const Animatable = require('react-native-animatable');
const Separator = require('./Helpers/Separator')
const Swipeout = require('react-native-swipeout')
const SearchBar = require('react-native-search-bar')
// const Footer = require('./Footer')
const Tabs = require('react-native-tabs')
const Shopping = require('./Shopping')
const Res = require('./Res')
const Tour = require('./Tour')

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


class Sites extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      page: 'second'
    }
  }

  goToRender(index){
    this.props.navigator.push({
      component: Sitesrender,
      passProps: {siteinfo: siteinfo[index]}
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

  goToShopping(){
    this.props.navigator.push({
      component: Shopping,
    })
  }

  render(){

    const list = siteinfo.map((item, index) => {

    var swipeoutRight = [
      {
        text: <Text style={styles.swipeout} autoClose={true}>Popular: {siteinfo[index].Popular}</Text>
      }
    ]

    var swipeoutLeft = [
      {
        component: <Image source={{uri: siteinfo[index].Maps}} autoClose={true} width={100} height={140} />
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
            source={{uri: siteinfo[index].Image}}
            style={styles.imgContainer}/>

            <View style={styles.TextContainer}>
            <Text style={styles.buttonText}>{siteinfo[index].Name}</Text>
            <Text style={styles.buttonText}>{siteinfo[index].Type}</Text>
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

        <ScrollView style={{flex: 8}}  >
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

         <Text name="second"
         onPress={this.goToRes.bind(this)}
         selectedIconStyle={{borderTopWidth:2,borderTopColor:'blue'}}>Restaurant</Text>

         <Text name="third"
         onPress={this.goToShopping.bind(this)}
         selectedIconStyle={{borderTopWidth:2,borderTopColor:'blue'}}>Shopping</Text>
          </Tabs>
        </View>

        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 60,
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

const siteinfo = [
{Name: "St. Patrick's Old Cathedral", Address: "260-264 Mulbuerry Street, New York, NY 10012", Description: "The Basilica of Saint Patrick's Old Cathedral buildt between 1809 and 1815, it was the seat of the Roman Catholic Archdiocese of New York until the current Saint Patrick's Cathedral", Phone: "212-226-8075", Website: "www.oldcathedral.org.com", Image: "http://i68.tinypic.com/v3pv7q.jpg", Maps: "http://i67.tinypic.com/5bitk.jpg", Type: 'Cathedral',  Latitude: "40.723576", Longitude: "-73.995184", Popular: "Old St. Patrick's Cathedral"},
{Name: "Rock & Roll Hall of Fame Annex", Address: "76 Mercer Street, New York, NY 10012", Description: "Rock & Roll Hall of Fame Annex", Phone: "212-966-5585", Website: "www.rockhall.com", Image: "http://i67.tinypic.com/2emgyn6.jpg", Maps: "http://i67.tinypic.com/5bitk.jpg", Type: 'Museum', Latitude: "40.722651", Longitude: "-74.000108", Popular: "Rock & Roll"},
{Name: "New Museum", Address: "235 Bowery Stret, New York, NY 10012", Description: "The New Meseum is a leading destination for new art and new ideas", Phone: "212-219-1222", Website: "www.newmuseum.org", Image: "http://i63.tinypic.com/4sfolv.jpg", Maps: "http://i67.tinypic.com/5bitk.jpg", Type: 'Museum',  Latitude: "40.722329", Longitude: "-73.992901", Popular: "New Museum"},
{Name: "E.V. Haughwout Building", Address: "Corner of Broome street and Brodway, New York, NY 10012", Description: "Buildt in 1857 by John P. Gaynor with cast-iron facades for two street-fronts, it origiinally housed Eder V. Haughwout's fashionable emporium.", Phone: "", Website: "https://en.wikipedia.org/wiki/E._V._Haughwout_Building", Maps: "http://i67.tinypic.com/5bitk.jpg", Image: "http://i63.tinypic.com/2rxh8d4.jpg",  Type: 'Building', Latitude: "40.721803", Longitude: "-73.999485", Popular: "Typical SoHo Building"}]

module.exports = Sites;
