const React = require('react-native');
const Shoppingrender = require('./Render/Shoppingrender')
const Animatable = require('react-native-animatable');
const Separator = require('./Helpers/Separator')

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
      component: Shoppingrender,
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
            underlayColor="#88D4F5"
            style={styles.box}>

            <View style={styles.ListContainer}>

              <Image
              source={{uri: shoppinginfo[index].Image}}
              style={styles.imgContainer}/>

              <Text style={styles.buttonText}>{shoppinginfo[index].Name}</Text>

            </View>

          </TouchableHighlight>

        </Animatable.View>
        <Separator />

        </View>
      )
    })


    return (
      <View style={styles.mainContainer}>
        <ScrollView style={{flex: .9}}  >
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
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  box: {
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  ListContainer: {
      padding: 10,
      flexDirection: 'row',
  },
  TextContainer: {
    padding: 10,
    flexDirection: 'column',
  },
  imgContainer: {
      marginLeft: 15,
      width: 80,
      height: 80,
      marginRight: 10,
  },
})

const shoppinginfo = [
  {Name: "Uniqlo SoHo", Address: "546 Broadway, New York, NY 10012", Description: "Clothing retailer producing a collection of casualwear & accessories for men, women & children.", Phone: "877-486-4756", Website: "www.uniqlo.com", Image: "http://i64.tinypic.com/et9zmh.jpg", Latitude: "40.723445", Longitude: "-73.998073"},
  {Name: "Pearl River Mart", Address: "17 Cleveland Place, New York, NY 10012", Description: "Eclectic emporium with 3-floors of Chinese apparel, accessories, housewares & furniture", Phone: "800-878-2446", Website: "www.pearlriver.com", Image: "http://i65.tinypic.com/dgqibs.jpg", Latitude: "40.721542", Longitude: "-74.000468"},
  {Name: "Topshop", Address: "478 Broadway, New York, NY 10012", Description: "Topshop is a British multinatioal fashion retailer of clothing, shoes, make-up and accessories - of which some 300 are in the UK", Phone: "866-853-8559", Website: "us.topshop.com", Image: "http://i67.tinypic.com/w2f380.jpg", Latitude: "40.721398", Longitude: "-73.999888"},
  {Name: "Prada", Address: "575 Broadway, New York, NY 10012", Description: "Retailer of upscale apparel, handbags, fragrances & more from the Italian designer", Phone: "212-334-8888", Website: "www.prada.com", Image: "http://i64.tinypic.com/3339xyu.jpg", Latitude: "40.724450", Longitude: "-73.997868"}]

module.exports = Shopping;
