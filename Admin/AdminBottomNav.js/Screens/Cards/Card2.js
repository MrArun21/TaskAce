import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
const Card2 = ({item}) => {
  return (
    <TouchableOpacity style={styles.wrapper} activeOpacity={0.9}>
      <View>
        <Text style={styles.Name}>{item.title}</Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            alignItems: 'center',
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

    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
