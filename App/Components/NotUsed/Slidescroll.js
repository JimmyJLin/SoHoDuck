const React = require('react-native');
const Dimensions = require('Dimensions');

var {
  width,
  height
} = Dimensions.get('window');

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
  Animated,
  AppRegistry,
  TouchableHighlight
} = React;

const GREY = 0;
const GREEN = 1;
const RED = 2;

const values = [1,2,3,4];

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);


class Render extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      values: values,
      colors: values.map(()=> new Animated.Value(GREY)),
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

  _animatedScroll(index, e){
    var threshold = width / 5;
    var x = e.nativeEvent.contentOffset.x;
    var target = null;

    x = x * -1;

    if (x > -50 && this._target != GREY){
      target = GREY;
    } else if (x < -50 && x > -threshold && this._target != GREEN) {
      target = GREEN;
    } else if (x < -threshold && this._target != RED) {
      target = RED;
    }

    if (target !== null){
      this._target = target;
      this._targetIndex = index;

      Animated.timing(this.state.colors[index], {
        toValue: target,
        duration: 180,
      }).start()
    }
  }

  takeAction(){
    this.setState = {
      action: true
    }
  }

  getActionText(){
    var actionText = '';

    if (this.state.action) {
      if (this._target == GREEN){
        actionText = 'Save Action';
      } else if (this._target == RED) {
        actionText = 'Delete Action'
      } else {
        actionText = 'No Action';
      }
      return 'You took' + actionText + ' on the ' + this._targetIndex
    }
    return 'You have not taken an action yet'
  }

  _renderRow(value, index){
    var bgColor = this.state.colors[index].interpolate({
      inputRange: [
        GREY,
        GREEN,
        RED
      ],
      outputRange: [
        'rgb(180, 180, 180)',
        'rgb(63, 236, 35)',
        'rgb(233, 19, 19)'
      ],
    })

    return (
      <View
      style={styles.row}
      key={index}>

      <AnimatedScrollView
      horizontal={true}
      directionalLockEnabled={true}
      style={[{flex: 1, height: 100}, {backgroundColor: bgColor}]}
      onScroll={this._animatedScroll.bind(this, index)}
      scrollEventThrottle={16}
      onMomentumScrollBegin={this.takeAction}
      >
        <View>
          <Text>{value + " <---- Slide the row that way and release"}</Text>
        </View>
      </AnimatedScrollView>
      </View>
    )
  }


  render(){
    return (
        <View style={styles.container}>
          <ScrollView style={styles.outerScroll}>
            {this.state.values.map(this._renderRow, this)}
          </ScrollView>
          <Text>{this.getActionText()}</Text>
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
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  outerScroll: {
    flex: 1,
    flexDirection: 'column'
  },
  row: {
    flex: 1
  },
})


module.exports = Render;
