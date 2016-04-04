var React = require('react-native');

var {
  View,
  WebView,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column',
  },
});
var url = 'https://www.google.com/maps/place/';

class Web extends React.Component{
  render() {
    console.log(url)
    console.log(this.props.address)
    web_url = url + this.props.address
    console.log(web_url)

    return (
      <View style={styles.container}>
        <WebView address={web_url}/>
      </View>
    );
  }
};

Web.propTypes = {
 address: React.PropTypes.string.isRequired
};

module.exports = Web;
