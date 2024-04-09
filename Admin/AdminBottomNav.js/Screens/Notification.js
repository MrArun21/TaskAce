import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavBar from './NavBar';

const Notification = () => {
  return (
    <View style={styles.Wrapper}>
      <NavBar title={'notification'} color={'#645EBC'} />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  Wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});
