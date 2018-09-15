import React from 'react';
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  ScrollView
} from 'react-native';
import firebase from 'react-native-firebase';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // firebase things?
    };
  }

  componentDidMount() {
    firebase
      .auth()
      .signInAnonymouslyAndRetrieveData()
      .then(user => {
        console.log('firebase auth', user.isAnonymous);
      });
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Header headerText={'Albums'} />
          <AlbumList />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 32,
    width: 120
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  modules: {
    margin: 20
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center'
  }
});