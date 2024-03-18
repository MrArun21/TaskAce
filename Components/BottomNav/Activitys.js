import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import NavBar from './NavBar';

const Activitys = ({navigation}) => {
  return (
    <>
      <NavBar title={'activity'} />
      <View>
        <Text style={{color: '#010101'}}>Activitys</Text>
      </View>
    </>
  );
};

export default Activitys;
const styles = StyleSheet.create({});
