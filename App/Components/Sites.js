const React = require('react-native');
const Render = require('./Render')
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
      component: Render,
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
            underlayColor="transparent"
            style={styles.button}>
            <Text style={styles.buttonText}>{siteinfo[index].Name}</Text>
          </TouchableHighlight>
        </Animatable.View>

        </View>
      )
    })


    return (
      <View style={styles.mainContainer}>
        <ScrollView style={{flex: .8}}  >
          <Text style={styles.title}> Main </Text>
          {list}
        </ScrollView>

        <View style={{flex: .2}}>
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
})

const siteinfo = [
{Name: "St. Patrick's Old Cathedral", Address: "260-264 Mulbuerry Street, New York, NY 10012", Description: "The Basilica of Saint Patrick's Old Cathedral buildt between 1809 and 1815, it was the seat of the Roman Catholic Archdiocese of New York until the current Saint Patrick's Cathedral", Phone: "212-226-8075", Website: "www.oldcathedral.org.com", Image: "http://i68.tinypic.com/67pe7c.jpg"},
{Name: "Rock & Roll Hall of Fame Annex", Address: "76 Mercer Street, New York, NY 10012", Description: "Rock & Roll Hall of Fame Annex", Phone: "212-966-5585", Website: "www.rockhall.com", Image: "http://i68.tinypic.com/kdr5o7.jpg"},
{Name: "New Museum", Address: "235 Bowery Stret, New York, NY 10012", Description: "The New Meseum is a leading destination for new art and new ideas", Phone: "212-219-1222", Website: "www.newmuseum.org", Image: "http://i66.tinypic.com/1saxbl.jpg"},
{Name: "E.V. Haughwout Building", Address: "Corner of Broome street and Brodway, New York, NY 10012", Description: "Buildt in 1857 by John P. Gaynor with cast-iron facades for two street-fronts, it origiinally housed Eder V. Haughwout's fashionable emporium.", Phone: "", Website: "https://en.wikipedia.org/wiki/E._V._Haughwout_Building", Image: "http://i66.tinypic.com/2pql72r.jpg"}]

module.exports = Sites;
