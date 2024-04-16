import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import NavBar from './NavBar';

import EmployeeData from '../../../EmployeeData';

const Employees = () => {
  console.log(EmployeeData);
  const CardBox = ({item}) => {
    return (
      <View style={styles.card}>
        <Image
          source={require('../../../assets/man.jpg')}
          style={styles.Profile}
        />
        <Text style={styles.txt}> {item.name}</Text>
        <Text style={styles.Subtxt}>Eid - {item.Eid}</Text>
        <Text style={styles.Subtxt}> {item.developerType} developer</Text>
        <Text style={styles.Subtxt}>working Type - {item.workingType}</Text>
        <Text style={styles.Subtxt}> Contact no. - {item.mobileNo}</Text>
        <Text style={styles.Subtxt}>email - {item.email}</Text>
        <Text style={styles.txt}> Technology</Text>
        <Text style={styles.Subtxt}>{item.technology}</Text>
        <Text style={styles.txt}> Address</Text>
        <Text style={styles.Subtxt}>
          {item.address}, {item.city}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.Wrapper}>
      <NavBar title={'Employees'} color={'#645EBC'} />

      <View style={styles.container}>
        <FlatList
          data={EmployeeData}
          keyExtractor={item => item.id.toString()}
          renderItem={CardBox}
          showsVerticalScrollIndicator={false}
          numColumns={2} // Render two columns
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </View>
  );
};

export default Employees;

const styles = StyleSheet.create({
  Wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    position: 'relative',
  },
  container: {
    width: '100%',
    height: '80%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#645EBC',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
    padding: 10,
  },
  Profile: {
    width: 80,
    height: 80,
    borderRadius: 100,
    alignSelf: 'center',

    borderWidth: 2,
    borderColor: '#645EBC',
  },
  txt: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 10,
    color: '#424242',
  },
  Subtxt: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,

    textAlign: 'center',
    alignSelf: 'center',
    color: '#424242',
    marginTop: -4,
    textTransform: 'capitalize',
  },
  flatListContainer: {
    justifyContent: 'space-between', // Align items in rows with space between them
  },
});
