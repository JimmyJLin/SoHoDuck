const React = require('react-native');
const Dimensions = require('Dimensions');
const MapView = require('react-native-maps')
const windowSize = Dimensions.get('window');
const {width, height} = Dimensions.get('window')

const {
  StyleSheet,
  PropTypes,
  View,
  Text,
  TouchableHighlight
} = React;

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

function randomColor(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}


class Render extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: []
    }
  }

  // getInitialState(){
  //   return {
  //     region: {
  //       latitude: LATITUDE,
  //       longitude: LONGITUDE,
  //       latitudeDelta: LATITUDE_DELTA,
  //       longitudeDelta: LONGITUDE_DELTA,
  //     },
  //     markers: [],
  //   };
  // }

  onMapPress(e){
    this.setState = {
      markers: [
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor(),
        }
      ],
    };
  }

  render(){

    console.log(this.state)
    return (
      <View style={styles.Container}>
        <MapView
          style={styles.map}
          initialRegion={this.state.region}
          onPress={this.onMapPress}
          >
          {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
            />
          ))}
        </MapView>
        <View style={styles.buttonContainer}>
          <View style={styles.bubble}>
            <Text> Tap to create a marker of random color</Text>
          </View>
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
  Container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
})


module.exports = Render;
