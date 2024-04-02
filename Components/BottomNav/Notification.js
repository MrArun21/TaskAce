import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import NavBar from './NavBar';
const Notification = () => {
  return (
    <View View style={styles.wrapper}>
      <NavBar title={'notification'} />
      <TouchableOpacity activeOpacity={0.9}>
        <View style={styles.notificationBox}>
          <View style={styles.notificationTitle}>
            <Text style={styles.notitext}>Notification</Text>
            <Text style={styles.notitext}>2m</Text>
          </View>
          <Text style={styles.notiContext}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffffff',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  notificationBox: {
    margin: 20,
    height: 80,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#645EBC',
  },
  notitext: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  notificationTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 2,
  },
  notiContext: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
});
