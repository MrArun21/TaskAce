import {Text, View} from 'react-native';
import React from 'react';

import NavBar from './NavBar';
const Notification = ({navigation}) => {
  return (
    <>
      <NavBar title={'notification'} />
      <View>
        <Text style={{color: '#010101'}}>Notification</Text>
      </View>
    </>
  );
};

export default Notification;
