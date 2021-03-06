import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const styles = {
  buttonStyle: {
    flex: 1,
    maxHeight: 43,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginHorizontal: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 10
  }
};

const Button = props => (
  <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
    <Text style={styles.textStyle}>{props.children}</Text>
  </TouchableOpacity>
);

export default Button;
