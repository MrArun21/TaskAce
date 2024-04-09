import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavBar from './NavBar';
const Plans = () => {
  return (
    <View style={styles.Wrapper}>
      <NavBar title={'plans'} color={'#645EBC'} />
    </View>
  );
};

export default Plans;

const styles = StyleSheet.create({
  Wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});
