const React = require('react-native');
const Footer = require('./Footer');
const PriceMarkers = require('./ReactMaps/PriceMarkers')
const CustomCallout = require('./ReactMaps/CustomCallout')
const Dimensions = require('Dimensions');
const windowSize = Dimensions.get('window');
const MapView = require('react-native-maps')
const Tabs = require('react-native-tabs')
const Shopping = require('./Shopping')
const Sites = require('./Sites')
const Res = require('./Res')

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
        {
        coordinate: {
          latitude: 40.728490,
          longitude: -73.998625,
          }
        },
        {
        coordinate: {
          latitude: 40.724613,
          longitude: -73.998772,
          }
        },
        {
        coordinate: {
          latitude: 40.721812,
          longitude: -73.997923,
          }
        },
        {
        coordinate: {
          latitude: 40.721386,
          longitude: -73.999458,
          }
        },
        {
        coordinate: {
          latitude: 40.728490,
          longitude: -73.998625,
          }
        },
        {
        coordinate: {
          latitude: 40.724413,
          longitude: -74.002492,
          }
        },
        {
        coordinate: {
          latitude: 40.725789,
          longitude: -74.001156,
          }
        },
        {
        coordinate: {
          latitude: 40.723775,
          longitude: -73.999611,
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
        {
        coordinate: {
          latitude: 40.725789,
          longitude: -74.000918,
          }
        },
        {
        coordinate: {
          latitude: 40.721702,
          longitude: -74.003047,
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
        {
        coordinate: {
          latitude: 40.722157,
          longitude: -73.999203,
          }
        },
        {
        coordinate: {
          latitude: 40.728490,
          longitude: -73.998625,
          }
        },
        {
        coordinate: {
          latitude: 40.725577,
          longitude: -73.999643,
          }
        },
        {
        coordinate: {
          latitude: 40.721517,
          longitude: -73.999699,
          }
        },
        {
        coordinate: {
          latitude: 40.725270,
          longitude: -73.000491,
          }
        },
        {
        coordinate: {
          latitude: 40.723522,
          longitude: -74.002534,
          }
        },
        {
        coordinate: {
          latitude: 40.725373,
          longitude: -73.999653,
          }
        },
        {
        coordinate: {
          latitude: 40.724909,
          longitude: -73.998708,
          }
        },
      ],
    }
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
    return (
      <View style={styles.mainContainer}>

        <View style={{flex: .9}}>
        <MapView
        showsUserLocation={true}
        followUserLocation={true}
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
          <MapView.Marker
          ref="res"
          coordinate={this.state.markers[4].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Bareburger"/>
          <MapView.Marker
          ref="res"
          coordinate={this.state.markers[5].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Fanelli Cafe"/>
          <MapView.Marker
          ref="res"
          coordinate={this.state.markers[6].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Cafe Select"/>
          <MapView.Marker
          ref="res"
          coordinate={this.state.markers[7].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Harney & Sons SoHo"/>
          <MapView.Marker
          ref="res"
          coordinate={this.state.markers[8].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Dominique Ansel Bakery"/>
          <MapView.Marker
          ref="res"
          coordinate={this.state.markers[9].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Laduree"/>
          <MapView.Marker
          ref="res"
          coordinate={this.state.markers[10].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Chobani"/>
          <MapView.Marker
          ref="res"
          coordinate={this.state.markers[11].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Georgetown Cupcake"/>

          {/* Sites Markers */}
          <MapView.Marker
          ref="site"
          coordinate={this.state.markers[12].coordinate}
          hasCenterMarker={true}
          zoom={13}
          MarkerPinColor={styles.pincolor}
          title="St. Patrick's Old Cathedral"/>
          <MapView.Marker
          ref="site"
          coordinate={this.state.markers[13].coordinate}
          hasCenterMarker={true}
          zoom={13}
          MarkerPinColor={styles.pincolor}
          title="Rock & Roll Hall of Fame Annex"/>
          <MapView.Marker
          ref="site"
          coordinate={this.state.markers[14].coordinate}
          hasCenterMarker={true}
          zoom={13}
          MarkerPinColor={styles.pincolor}
          title="New Museum"/>
          <MapView.Marker
          ref="site"
          coordinate={this.state.markers[15].coordinate}
          hasCenterMarker={true}
          zoom={13}
          MarkerPinColor={styles.pincolor}
          title="E.V. Haughwout Building"/>
          <MapView.Marker
          ref="res"
          coordinate={this.state.markers[16].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="West Broadway Gallaries"/>
          <MapView.Marker
          ref="res"
          coordinate={this.state.markers[17].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Leslie-Lohman Museum"/>

          {/* Shopping Markers */}
          <MapView.Marker
          ref="shop"
          coordinate={this.state.markers[18].coordinate}
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
          coordinate={this.state.markers[19].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Pearl River Mart"/>
          <MapView.Marker
          ref="shop"
          coordinate={this.state.markers[20].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Topshop"/>
          <MapView.Marker
          ref="shop"
          coordinate={this.state.markers[21].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Prada"/>
          <MapView.Marker
          ref="shop"
          coordinate={this.state.markers[22].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Bloomingdale"/>
          <MapView.Marker
          ref="shop"
          coordinate={this.state.markers[23].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Apple Store"/>
          <MapView.Marker
          ref="shop"
          coordinate={this.state.markers[24].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Adidas Originals"/>
          <MapView.Marker
          ref="shop"
          coordinate={this.state.markers[25].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Madewell SoHo"/>
          <MapView.Marker
          ref="shop"
          coordinate={this.state.markers[26].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Cole Haan at SoHo"/>
          <MapView.Marker
          ref="shop"
          coordinate={this.state.markers[27].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Anthropologie"/>
          <MapView.Marker
          ref="shop"
          coordinate={this.state.markers[28].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="Club Monaco"/>
          <MapView.Marker
          ref="shop"
          coordinate={this.state.markers[29].coordinate}
          hasCenterMarker={true}
          zoom={13}
          title="J.Crew"/>

        </MapView>

        </View>

        <View style={{flex: .08}}>

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
    marginTop: 112,
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
    height: 671,
    marginTop: -47,
    borderWidth: 1,
    borderColor: '#000000',
  },
  pincolor: {
    color: 'blue',
  }
})

module.exports = Tour;
