const React = require('react-native');
const MapView = require('react-native-maps')
const Dimensions = require('Dimensions');
const windowSize = Dimensions.get('window');
const PriceMarkers = require('../ReactMaps/PriceMarkers')
const CustomCallout = require('../ReactMaps/CustomCallout')

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
          <View style={{flex: .6}}>

            <Text style={styles.title}>
            {this.props.shoppinginfo.Name}
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
              title={this.props.shoppinginfo.Name}/>
            </MapView>

        </View>
        <View style={{flex: .4}}>
          <Text style={styles.text}>Address: {this.props.shoppinginfo.Address}</Text>
          <Text style={styles.text}>Description: {this.props.shoppinginfo.Description}</Text>
          <Text style={styles.text}>Phone: {this.props.shoppinginfo.Phone}</Text>
          <Text style={styles.text}>Website: {this.props.shoppinginfo.Website}</Text>
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
})


module.exports = Shoppingrender;
