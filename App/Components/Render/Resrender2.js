const React = require('react-native');
const MapView = require('react-native-maps')
const Dimensions = require('Dimensions');
const windowSize = Dimensions.get('window');
const PriceMarkers = require('../ReactMaps/PriceMarkers')
const CustomCallout = require('../ReactMaps/CustomCallout')
const Swiper = require('react-native-swiper')

const {
  Text,
  View,
  NavigatorIOS,
  Image,
  ScrollView,
  TextInput,
  ListView,
  StyleSheet,
  TouchableHighlight
} = React;

class Resrender extends React.Component{
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
          latitude: this.props.resinfo.Latitude,
          longitude: this.props.resinfo.Longitude,
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

          <View style={{flex: .4}}>
            <Swiper style={styles.wrapper}
              dot={<View style={{backgroundColor:'rgba(255,255,255,.3)', width: 13, height: 13,borderRadius: 7, marginLeft: 7, marginRight: 7,}} />}
              activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
              paginationStyle={{
                bottom: 5,
              }}
              loop={false}>
              <View style={styles.slide}>
                <Image style={styles.image} source={{uri: 'http://i65.tinypic.com/2ykz3nl.jpg'}} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.image} source={{uri: 'http://i64.tinypic.com/55nlvn.jpg'}} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.image} source={{uri: 'http://i67.tinypic.com/28s087n.jpg'}} />
              </View>
            </Swiper>
          </View>

          <View style={{flex: .4}}>

          <Text style={styles.title}>
          {this.props.resinfo.Name}
          </Text>

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
              title={this.props.resinfo.Name}/>
            </MapView>
          </View>

          <View style={{flex: .2}}>
            <Text style={styles.text}>Address: {this.props.resinfo.Address}</Text>
            <Text style={styles.text}>Description: {this.props.resinfo.Description}</Text>
            <Text style={styles.text}>Phone: {this.props.resinfo.Phone}</Text>
            <Text style={styles.text}>Website: {this.props.resinfo.Website}</Text>
          </View>
          <View style={{flex: .2}}>
            <Text style={styles.title}> Hello World! </Text>
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
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  text: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 15,
    textAlign: 'center',
    color: '#fff'
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
  map: {
    height: 300,
    borderWidth: 1,
    borderColor: '#000000',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  detailsImage: {
    marginTop: 0,
    width: 400,
    height: 200,
    backgroundColor: '#eaeaea',
    marginRight: 10,
  },
  wrapper: {
    // backgroundColor: '#f00',
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  image: {
    width: 100,
    height: 100,
  },
  imgContainer: {
    marginLeft: 15,
    width: 100,
    height: 100,
    marginRight: 10,
  },
})


module.exports = Resrender;
