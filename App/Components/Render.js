const React = require('react-native');
// const Web_View = require('./Helpers/WebView')

var {
  Text,
  View,
  NavigatorIOS,
  Image,
  ScrollView,
  MapView,
  TextInput,
  ListView,
  StyleSheet,
  TouchableHighlight
} = React;


var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 64,
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
    height: 300,
    borderWidth: 1,
    borderColor: '#000000',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})


class Render extends React.Component{
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
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    }
  }


  render(){
    return (
      <View style={styles.mainContainer}>
        <View style={{flex: .8}}>
          <MapView
            style={styles.map}
            selectTextOnFocus={true}
            rotateEnabled={true}
            scrollEnabled={true}
            enableHighAccuracy={true}
            showsUserLocation={true}
            followUserLocation={true}
            />

        </View>
        <View style={{flex: .2}}>
          <Text style={styles.title}> Hello World! </Text>
        </View>
      </View>
    )
  }
}

module.exports = Render;
