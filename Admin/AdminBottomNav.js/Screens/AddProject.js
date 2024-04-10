import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavBar from './NavBar';
const AddProject = () => {
  return (
    <View style={styles.Wrapper}>
      <NavBar title={'Create Project'} color={'#645EBC'} />
      <View style={styles.Container}></View>
    </View>
  );
};

export default AddProject;

const styles = StyleSheet.create({
  Wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});
