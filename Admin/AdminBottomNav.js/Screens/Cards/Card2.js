import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
const Card2 = ({item}) => {
  return (
    <TouchableOpacity style={styles.wrapper} activeOpacity={0.9}>
      <View style={styles.wrapper}>
        <View
          style={{
            gap: 10,
            alignItems: 'flex-start',
          }}>
          <Text style={styles.Name}>{item.title}</Text>
          <View
            style={{
              gap: 10,
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            <View style={styles.box}>
              <Icon name="person" size={15} color={'#000'} />
              <Text style={styles.text}>{item.peoples} Peoples</Text>
            </View>
            <View style={styles.box}>
              <Icon name="calendar" size={15} color={'#000'} />
              <Text style={styles.text}>{item.date}</Text>
            </View>
            <View style={styles.box}>
              <Icon name="clock" size={15} color={'#000'} />
              <Text style={styles.text}>{item.time}</Text>
            </View>
          </View>
        </View>
        <View style={styles.Btn}>
          <Text style={[styles.text, {color: '#fff'}]}>Join</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card2;

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    backgroundColor: '#c5c1ff',
    alignSelf: 'center',
    borderRadius: 10,
    gap: 10,
    width: '100%',
    padding: 5,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    color: '#000',
    fontSize: 12,
    textTransform: 'capitalize',
  },
  Name: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    textTransform: 'capitalize',
    fontSize: 16,
    marginBottom: 5,
  },
  box: {flexDirection: 'row', alignItems: 'center', gap: 5},
  Btn: {
    backgroundColor: '#645dbd',
    height: 30,
    width: 60,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    top: '40%',
    right: 25,
  },
});
