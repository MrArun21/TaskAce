import {
  StyleSheet,
  Text,
  View,
  Alert,
  ToastAndroid,
  BackHandler,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useBackHandler} from '@react-native-community/hooks';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import Icon1 from 'react-native-vector-icons/FontAwesome6';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import CustomCard from './CustomCard';
import Data from '../../../DemoData';

const AdminHome = () => {
  // Date,Time
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up interval
  }, []);
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  // Extracting individual parts
  const dateInNumber = currentDateTime.getDate();
  const dayByName = dayNames[currentDateTime.getDay()];
  const monthByName = currentDateTime.toLocaleString('en-US', {month: 'long'});
  const hour = currentDateTime.getHours();
  const minute = currentDateTime.getMinutes();
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // Convert hour to 12-hour format
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
  //navigation
  const navigation = useNavigation();
  const [backPressCount, setBackPressCount] = useState(0);
  const backActionHandler = () => {
    if (navigation.isFocused()) {
      // Check if the home screen is focused
      if (backPressCount < 1) {
        ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
        setBackPressCount(backPressCount + 1);
        setTimeout(() => {
          setBackPressCount(0);
        }, 2000); // Reset back press count after 2 seconds
      } else {
        Alert.alert('', 'Are you sure you want to exit?', [
          {
            text: 'No',
            onPress: () => null,
          },
          {
            text: 'Yes',
            onPress: () => BackHandler.exitApp(),
          },
        ]);
      }
      return true;
    } else {
      // If it's not the home screen, don't handle the back press
      return false;
    }
  };

  // Attach back handler only for the home screen
  useBackHandler(backActionHandler);
  return (
    <View style={styles.Wrapper}>
      <View style={styles.Container}>
        <View style={styles.TitleBox}>
          <Text style={styles.title}>delta software lTD </Text>
          <Text style={styles.description}>
            software development & IT Consultant company since 2001
          </Text>
        </View>
        <View style={styles.Right}>
          <View style={styles.Icon}>
            <Icon2
              name="search"
              size={25}
              color="#645ebc"
              onPress={() => navigation.navigate('Search')}
            />
            <Icon1
              name="bars-staggered"
              size={25}
              color="#645ebc"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
            />
          </View>
        </View>
      </View>
      <View style={styles.dashboard}>
        <Text style={styles.Dashtitle}>DashBoard</Text>
        <View style={styles.projectDetails}>
          <View style={styles.projectDetailsLeft}>
            <View style={[styles.Project, {backgroundColor: '#fff'}]}>
              <Text style={styles.text1}>Completed Projects</Text>
              <Text style={styles.text2}>8</Text>
            </View>
            <View style={[styles.Project, {backgroundColor: '#C5C1FF'}]}>
              <Text style={styles.text1}>Upcoming Projects</Text>
              <Text style={styles.text2}>12</Text>
            </View>
          </View>
          <View style={styles.projectDetailsRight}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={{alignItems: 'center', gap: -15}}>
                <Text style={styles.date}>{dateInNumber}</Text>
                <Text style={styles.day}>{monthByName}</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.day}>{dayByName}</Text>
                <Text style={styles.day}>
                  {formattedHour}:{minute < 10 ? '0' + minute : minute} {amPm}
                </Text>
              </View>
            </View>
            <Text style={[styles.day, {fontSize: 12, color: '#E83C3C'}]}>
              Today's Submission
            </Text>
            <Text style={[styles.day, {fontSize: 16}]}>App Design for DN</Text>
          </View>
        </View>
      </View>
      <View style={styles.CardContainer}>
        <Text style={styles.title1}>approve project</Text>

        <View style={styles.Card}>
          <FlatList
            data={Data}
            keyExtractor={item => item.id.toString()}
            renderItem={CustomCard}
            horizontal={true}
            refreshing={true}
          />
        </View>
      </View>
    </View>
  );
};

export default AdminHome;

const styles = StyleSheet.create({
  Wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    position: 'relative',
  },
  Container: {
    width: '100%',
    height: '14%',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  Right: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  TitleBox: {
    width: '80%',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: '#645ebc',
    fontSize: 24,

    textTransform: 'capitalize',
  },

  Icon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  description: {
    fontFamily: 'Poppins-Medium',
    color: '#645ebc',
    fontSize: 12,
    width: '80%',
  },
  dashboard: {
    width: '100%',
    backgroundColor: '#645dbd',
    height: '80%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  Dashtitle: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center',
  },
  projectDetails: {
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  projectDetailsLeft: {
    alignItems: 'center',
    justifyContent: 'space-around',

    width: '48%',
    gap: 10,
  },
  Project: {
    flexDirection: 'row',
    gap: 15,

    borderRadius: 18,
    alignItems: 'center',

    padding: 10,
  },
  text1: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#000',
    textTransform: 'capitalize',
  },
  text2: {
    fontFamily: 'Poppins-Bold',
    color: '#424242',
    fontSize: 38,
    textTransform: 'capitalize',
  },
  projectDetailsRight: {
    width: '50%',
    backgroundColor: '#fff',
    height: '100%',
    borderRadius: 18,
    padding: 10,
    gap: 10,
  },
  date: {
    fontFamily: 'Poppins-Bold',
    color: '#645dbd',
    fontSize: 40,
    textTransform: 'capitalize',
  },
  day: {
    fontFamily: 'Poppins-Bold',
    color: '#424242',
    fontSize: 18,
    textTransform: 'uppercase',
    alignSelf: 'center',
  },
  CardContainer: {
    position: 'absolute',
    alignItems: 'center',
    height: '48%',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    bottom: 0,
    borderTopLeftRadius: 20,

    borderTopRightRadius: 20,
    padding: 10,
  },
  title1: {
    color: '#424242',
    fontFamily: 'Poppins-Medium',
    textTransform: 'capitalize',
    textDecorationLine: 'underline',
    alignSelf: 'flex-start',
  },
  Card: {
    width: '100%',
    marginTop: 20,
  },
});
