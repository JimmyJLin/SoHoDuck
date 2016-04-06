const React = require('react-native');
const Sitesrender = require('./Render/Sitesrender')
const Animatable = require('react-native-animatable');


const {
  Text,
  View,
  NavigatorIOS,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight
} = React;



class Sites extends React.Component{
  goToRender(index){
    this.props.navigator.push({
      component: Sitesrender,
      title: 'Direction',
      passProps: {siteinfo: siteinfo[index]}
    })
  }

  render(){


    const list = siteinfo.map((item, index) => {
      return (
        <View key={index}>

        <Animatable.View
        animation="zoomInDown"
        style={styles.rowContainer}>

          <TouchableHighlight
            onPress={this.goToRender.bind(this, index)}
            style={styles.box}>

            <View style={styles.ListContainer}>

            <Image
            source={{uri: siteinfo[index].Image}}
            style={styles.imgContainer}/>

            <Text style={styles.buttonText}>{siteinfo[index].Name}</Text>

            </View>

          </TouchableHighlight>

        </Animatable.View>

        </View>
      )
    })


    return (
      <View style={styles.mainContainer}>
        <ScrollView style={{flex: .9}}  >
          <Text style={styles.title}> Main </Text>
          {list}
        </ScrollView>

        <View style={{flex: .1}}>
        <Text style={styles.title}>Footer</Text>
        </View>
      </View>
    )
  }
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
  box: {
    height: 100,
    marginBottom: 20,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 3,
      width: 2,
    }
  },
  ListContainer: {
      padding: 10,
      borderWidth: 1,
      flexDirection: 'row',
      borderBottomColor: '#CCC',
      borderColor: 'transparent'
  },
  imgContainer: {
      marginLeft: 15,
      width: 80,
      height: 80,
      marginRight: 10,
  },
})

const siteinfo = [
{Name: "St. Patrick's Old Cathedral", Address: "260-264 Mulbuerry Street, New York, NY 10012", Description: "The Basilica of Saint Patrick's Old Cathedral buildt between 1809 and 1815, it was the seat of the Roman Catholic Archdiocese of New York until the current Saint Patrick's Cathedral", Phone: "212-226-8075", Website: "www.oldcathedral.org.com", Image: "http://i68.tinypic.com/v3pv7q.jpg", Latitude: "40.723576", Longitude: "-73.995184"},
{Name: "Rock & Roll Hall of Fame Annex", Address: "76 Mercer Street, New York, NY 10012", Description: "Rock & Roll Hall of Fame Annex", Phone: "212-966-5585", Website: "www.rockhall.com", Image: "http://i67.tinypic.com/2emgyn6.jpg", Latitude: "40.722651", Longitude: "-74.000108"},
{Name: "New Museum", Address: "235 Bowery Stret, New York, NY 10012", Description: "The New Meseum is a leading destination for new art and new ideas", Phone: "212-219-1222", Website: "www.newmuseum.org", Image: "http://i63.tinypic.com/4sfolv.jpg", Latitude: "40.725435", Longitude: "-74.002965"},
{Name: "E.V. Haughwout Building", Address: "Corner of Broome street and Brodway, New York, NY 10012", Description: "Buildt in 1857 by John P. Gaynor with cast-iron facades for two street-fronts, it origiinally housed Eder V. Haughwout's fashionable emporium.", Phone: "", Website: "https://en.wikipedia.org/wiki/E._V._Haughwout_Building", Image: "http://i63.tinypic.com/2rxh8d4.jpg", Latitude: "40.721803", Longitude: "-73.999485"}]

module.exports = Sites;
