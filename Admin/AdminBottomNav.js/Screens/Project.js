import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavBar from './NavBar';
const Project = () => {
  return (
    <View style={styles.Wrapper}>
      <NavBar title={'projects'} color={'#645EBC'} />
    </View>
  );
};

export default Project;

const styles = StyleSheet.create({
  Wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});
