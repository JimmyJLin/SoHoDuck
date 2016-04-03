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
  Image,
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

  getRowTitle(title, item){
    return item[0]
  }

  render(){
    const objArr = Object.keys(this.props)
    console.log('Render Object', objArr[2])

    if (objArr[2] == 'resinfo'){
      return (
        <View style={styles.mainContainer}>
          <View style={{flex: .8}}>
            <Text style={styles.title}>
            {this.props.resinfo.Name}
            </Text>
            <Image
            source={{uri: this.props.resinfo.Image}}
            style={styles.detailsImage}/>
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
    } else if (objArr[2] == 'siteinfo') {
      return (
        <View style={styles.mainContainer}>
          <View style={{flex: .8}}>
            <Text style={styles.title}>
            {this.props.siteinfo.Name}
            </Text>
            <Image
            source={{uri: this.props.siteinfo.Image}}
            style={styles.detailsImage}/>
            <Text style={styles.text}>Address: {this.props.siteinfo.Address}</Text>
            <Text style={styles.text}>Description: {this.props.siteinfo.Description}</Text>
            <Text style={styles.text}>Phone: {this.props.siteinfo.Phone}</Text>
            <Text style={styles.text}>Website: {this.props.siteinfo.Website}</Text>
          </View>
          <View style={{flex: .2}}>
            <Text style={styles.title}> Hello World! </Text>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.mainContainer}>
          <View style={{flex: .8}}>
            <Text style={styles.title}>
            {this.props.shoppinginfo.Name}
            </Text>
            <Image
            source={{uri: this.props.shoppinginfo.Image}}
            style={styles.detailsImage}/>
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
}

module.exports = Render;
