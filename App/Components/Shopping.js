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


class Shopping extends React.Component{
  goToRender(index){
    this.props.navigator.push({
      component: Render,
      title: 'Direction',
      passProps: {shoppinginfo: shoppinginfo[index]}
    })
  }

  render(){

    const list = shoppinginfo.map((item, index) => {
      return (
        <View key={index}>

        <Animatable.View
        animation="zoomInDown"
        style={styles.rowContainer}>
          <TouchableHighlight
            onPress={this.goToRender.bind(this, index)}
            underlayColor="transparent"
            style={styles.button}>
            <Text style={styles.buttonText}>{shoppinginfo[index].Name}</Text>
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
  detailsImage: {
    width: 134,
    height: 200,
    backgroundColor: '#eaeaea',
    marginRight: 10,
  },
})

const shoppinginfo = [
  {Name: "Uniqlo SoHo", Address: "546 Broadway, New York, NY 10012", Description: "Clothing retailer producing a collection of casualwear & accessories for men, women & children.", Phone: "877-486-4756", Website: "www.uniqlo.com", Image: "http://i67.tinypic.com/a3lgsh.jpg"},
  {Name: "Pearl River Mart", Address: "17 Cleveland Place, New York, NY 10012", Description: "Eclectic emporium with 3-floors of Chinese apparel, accessories, housewares & furniture", Phone: "800-878-2446", Website: "www.pearlriver.com", Image: "http://i63.tinypic.com/2vmczl0.jpg"},
  {Name: "Topshop", Address: "478 Broadway, New York, NY 10012", Description: "Topshop is a British multinatioal fashion retailer of clothing, shoes, make-up and accessories - of which some 300 are in the UK", Phone: "866-853-8559", Website: "us.topshop.com", Image: "http://i68.tinypic.com/2pqrjh4.jpg"},
  {Name: "Prada", Address: "575 Broadway, New York, NY 10012", Description: "Retailer of upscale apparel, handbags, fragrances & more from the Italian designer", Phone: "212-334-8888", Website: "www.prada.com", Image: "http://i63.tinypic.com/s6ists.jpg"}]

module.exports = Shopping;
