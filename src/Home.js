import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textRed: 'tunggu...',
      textBlue: 'tunggu...'
    }
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        textRed: 'Red',
        textBlue: 'Blue'
      });
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>Kamu pilih siapa?</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.image}
            onPress={() => { this.props.navication.navigate('male') }}>
            <View>
              <Image source={require('../assets/user-male-icon.png')}
              />
              <Text>Blue</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.image}
            onPress={() => { Alert.alert("Red") }}>
            <View>
              <Image source={require('')}
              />
              <Text>{this.state.textRed}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const imageOnClick = () => {

}

const styles = StyleSheet.create({
  container: {

  },
  title: {
    padding: 20,
    textAlign: 'center'
  },
  images: {
    flexDirection: 'row'
  },
  image: {
    flex: 1,
    textAlign: 'center'
  }
})

AppRegistry.registerComponent('Home', () => Home)
