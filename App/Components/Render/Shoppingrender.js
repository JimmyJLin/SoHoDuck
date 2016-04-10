const React = require('react-native');
const MapView = require('react-native-maps')
const Dimensions = require('Dimensions');
const windowSize = Dimensions.get('window');
const PriceMarkers = require('../ReactMaps/PriceMarkers')
const CustomCallout = require('../ReactMaps/CustomCallout')
const Swiper = require('react-native-swiper')
const Communications = require('react-native-communications')
const Separator = require('../Helpers/Separator')


const {
  Text,
  View,
  NavigatorIOS,
  Image,
  ScrollView,
  TextInput,
  ListView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} = React;

class Shoppingrender extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isFirstLoad: true,
      mapRegion: undefined,
      mapRegionInput: undefined,
      initialPosition: undefined,
      lastPosition: undefined,
      annotation: [],
      region: {
        latitude: 0,
        longitude: 0,
      },
      markers: [
        {
        coordinate: {
          latitude: this.props.shoppinginfo.Latitude,
          longitude: this.props.shoppinginfo.Longitude,
          }
        }
      ],
    }
  }

  getRowTitle(title, item){
    return item[0]
  }

  render(){
    const objArr = Object.keys(this.props)
      return (
        <View style={styles.mainContainer}>

        {/* Image Component */}
        <View style={styles.imgContainer}>

          <Swiper style={styles.wrapper}
            dot={<View style={{backgroundColor:'rgba(255,255,255,.3)', width: 13, height: 13,borderRadius: 7, marginLeft: 7, marginRight: 7,}} />}
            activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
            paginationStyle={{
              bottom: 500,
            }}
            loop={false}>
            <View style={styles.slide}>
              <Image style={styles.image} source={{uri: this.props.shoppinginfo.Image}} >
              <Text style={styles.imageText}>
              {this.props.shoppinginfo.Name}
              </Text>
              </Image>
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={{uri: this.props.shoppinginfo.Image2}} >
              <Text style={styles.imageText}>
              {this.props.shoppinginfo.Name}
              </Text>
              </Image>
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={{uri: this.props.shoppinginfo.Image3}} >
              <Text style={styles.imageText}>
              {this.props.shoppinginfo.Name}
              </Text>
              </Image>
            </View>
          </Swiper>

        </View>

        {/* Detail Component*/}
        <View style={styles.detailContainer}>

          <ScrollView>
            <TouchableOpacity onPress={() => Communications.web("https://www.google.com/maps/place/" + this.props.shoppinginfo.Address)}>
              <View style={styles.listBox}>
                <Image style={styles.icon}
                source={require('../img/render/location.jpg')}/>
                <Text style={styles.text}> {this.props.shoppinginfo.Address}</Text>
              </View>
            </TouchableOpacity>

            <Separator />

            <View style={styles.listBox}>
            <TouchableOpacity onPress={() => Communications.phonecall(this.props.shoppinginfo.Phone, true)}>
              <View style={styles.holder}>
                <Image style={styles.icon}
                source={require('../img/render/call.jpg')}/>
                <Text style={styles.text}>Call  {this.props.shoppinginfo.Phone}</Text>
              </View>
            </TouchableOpacity>
            </View>

            <Separator />

            <View style={styles.listBox}>
            <TouchableOpacity onPress={() => Communications.web(this.props.shoppinginfo.Website)}>
              <View style={styles.holder}>
                <Image style={styles.icon}
                source={require('../img/render/web.jpg')}/>
                <Text style={styles.text}> {this.props.shoppinginfo.Website}</Text>
              </View>
            </TouchableOpacity>
            </View>

            <Separator />

            <View>
            <View style={styles.listBox}>
              <Image style={styles.icon}
              source={require('../img/render/detail.jpg')}/>
              <Text style={styles.text}>Description: </Text>
            </View>
            <View  style={styles.bigListBox}>
              <Text  style={styles.descText}>
              {this.props.shoppinginfo.Description}</Text>
            </View>
            </View>

            <Separator />
          </ScrollView>

        </View>

        {/* Map component */}
        <View style={styles.mapContainer}>
          <MapView
          style={styles.map}
          showsUserLocation={true}
          followUserLocation={true}
          hasCenterMarker={true}>
            <MapView.Marker
            ref="m1"
            coordinate={this.state.markers[0].coordinate}
            hasCenterMarker={true}
            zoom={13}
            title={this.props.shoppinginfo.Name}/>
          </MapView>
        </View>

        </View>
      )
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 64,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2'
  },
  title: {
    marginBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  text: {
    marginBottom: 5,
    fontSize: 15,
    textAlign: 'center',
    color: '#000'
  },
  descText: {
    marginBottom: 5,
    marginLeft: 30,
    fontSize: 15,
    textAlign: 'left',
    color: '#000'
  },
  map: {
    height: 226,
    borderWidth: 1,
    borderColor: '#000000',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  wrapper: {
    // backgroundColor: '#f00',
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  image: {
    width: 430,
    height: 250,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  imageText: {
    marginBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  ListContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  imgContainer: {
    flex: .35
  },
  detailContainer: {
    flex: .3
  },
  mapContainer: {
    flex: .3
  },
  listBox: {
    height: 40,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  icon: {
    marginRight: 10,
    width: 20,
    height: 20
  },
  holder: {
    flexDirection: 'row',
  },
  bigListBox: {
    marginTop: -10,
    height: 90,
    padding: 10,
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
  },
})


module.exports = Shoppingrender;
