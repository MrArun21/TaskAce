import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavBar from './NavBar';
const AddProject = () => {
  return (
    <View style={styles.Wrapper}>
      <NavBar title={'Add Project'} color={'#645EBC'} />
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
