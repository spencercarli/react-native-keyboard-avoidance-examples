import React from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles';
import logo from './logo.png';

const Demo = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TextInput
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        placeholder="Username"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
      />
    </View>
  );
};

export default Demo;
