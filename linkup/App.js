import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

class Greeting extends React.Component{
  render(){
    return(
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name='Jonny'/>
        <Greeting name='Pedro' />
        <Greeting name='Lani'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('linkup', () => App);