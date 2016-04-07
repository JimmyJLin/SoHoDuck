const React = require('react-native');
const Footer = require('./Footer');
const PriceMarkers = require('./ReactMaps/PriceMarkers')
const CustomCallout = require('./ReactMaps/CustomCallout')
const Dimensions = require('Dimensions');
const windowSize = Dimensions.get('window');
const MapView = require('react-native-maps')
const Tabs = require('react-native-tabs')


const {
  Text,
  View,
  NavigatorIOS,
  Image,
  ScrollView,
  StyleSheet,
  PropTypes,
  TabBarIOS,
  TouchableOpacity,
  TouchableHighlight
} = React;

var LATITUDE = 40.725435;
var LONGITUDE = -74.002965;

class Tour extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      page: 'first',
      isFirstLoad: true,
      mapRegion: undefined,
      markers: [

        // Restaurant Data Starts
        {
        coordinate: {
          latitude: 40.725435,
          longitude: -74.002965,
          }
        },
        {
        coordinate: {
          latitude: 40.721526,
          longitude: -73.997226,
          }
        },
        {
        coordinate: {
          latitude: 40.722087,
          longitude: -73.996344,
          }
        },
        {
        coordinate: {
          latitude: 40.721891,
          longitude: -73.995766,
          }
        },

        // Sites Data Starts
        {
        coordinate: {
          latitude: 40.723576,
          longitude: -73.995184,
          }
        },
        {
        coordinate: {
          latitude: 40.722651,
          longitude: -74.000108,
          }
        },
        {
        coordinate: {
          latitude: 40.722329,
          longitude: -73.992901,
          }
        },
        {
        coordinate: {
          latitude: 40.721803,
          longitude: -73.999485,
          }
        },

        // Shopping Data Starts
        {
        coordinate: {
          latitude: 40.723445,
          longitude: -73.998073,
          }
        },
        {
        coordinate: {
          latitude: 40.721542,
          longitude: -74.000468,
          }
        },
        {
        coordinate: {
          latitude: 40.721398,
          longitude: -73.999888,
          }
        },
        {
        coordinate: {
          latitude: 40.724450,
          longitude: -73.997868,
          }
        },
      ],
    }
  }

  render(){
    return (
      <View style={styles.mainContainer}>
        <View style={{flex: .9}}>
        <MapView
          style={styles.map}>

          {/* Restaurant Markers */}
          <MapView.Marker
          ref="res"
          coordinate={this.state.markers[0].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Blue Ribbon Sushi"/>
          <MapView.Marker
          ref="res"
          coordinate={this.state.markers[1].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Eileen's Cheesecake"/>
          <MapView.Marker
          ref="res"
          coordinate={this.state.markers[2].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Pomodoro"/>
          <MapView.Marker
          ref="res"
          coordinate={this.state.markers[3].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Rice to Riches"/>


          {/* Sites Markers */}
          <MapView.Marker
          ref="site"
          coordinate={this.state.markers[4].coordinate}
          hasCenterMarker={true}
          zoom={13}
          MarkerPinColor={styles.pincolor}
          title="St. Patrick's Old Cathedral"/>
          <MapView.Marker
          ref="site"
          coordinate={this.state.markers[5].coordinate}
          hasCenterMarker={true}
          zoom={13}
          MarkerPinColor={styles.pincolor}
          title="Rock & Roll Hall of Fame Annex"/>
          <MapView.Marker
          ref="site"
          coordinate={this.state.markers[6].coordinate}
          hasCenterMarker={true}
          zoom={13}
          MarkerPinColor={styles.pincolor}
          title="New Museum"/>
          <MapView.Marker
          ref="site"
          coordinate={this.state.markers[7].coordinate}
          hasCenterMarker={true}
          zoom={13}
          MarkerPinColor={styles.pincolor}
          title="E.V. Haughwout Building"/>


          {/* Shopping Markers */}
          <MapView.Marker
          ref="shop"
          coordinate={this.state.markers[8].coordinate}
          hasCenterMarker={true}
          zoom={13}
           title="Uniqlo SoHo">
            <MapView.Callout>
              <Text title="Uniqlo SoHo">
              Uniqlo SoHo
              </Text>
            </MapView.Callout>
          </MapView.Marker>
          <MapView.Marker
          ref="shop"
          coordinate={this.state.markers[9].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Pearl River Mart"/>
          <MapView.Marker
          ref="shop"
          coordinate={this.state.markers[10].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Topshop"/>
          <MapView.Marker
          ref="shop"
          coordinate={this.state.markers[11].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Prada"/>

        </MapView>

        </View>

        <View style={{flex: .08}}>
        <Footer/>
        </View>
      </View>
    )
  }
}


const regionText = {
  latitude: '0',
  longitude: '0',
  latitudeDelta: '0',
  longitudeDelta: '0',
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
  map: {
    height: 552,
    borderWidth: 1,
    borderColor: '#000000',
  },
  pincolor: {
    color: 'blue',
  }
})

module.exports = Tour;
