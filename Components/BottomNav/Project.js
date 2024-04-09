import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import NavBar from './NavBar';
import Data from '../../DemoData';
import * as Progress from 'react-native-progress';
import {Calendar} from 'react-native-calendars';
const Card = ({item}) => (
  <TouchableOpacity style={styles.card} activeOpacity={0.9}>
    <View style={styles.progresscont}>
      <Progress.Circle
        progress={item.progress / 10}
        size={50}
        showsText={true}
        textStyle={styles.progtext}
        borderColor="#645EBC"
        color="#645EBC"
        strokeCap="round"
      />
      <Text style={[styles.taskBubble, styles.taskType]}>{item.type}</Text>
    </View>
    <View>
      <Text style={styles.taskName}>{item.name.substring(0, 26) + '...'}</Text>
      <Text style={styles.assignedto}>Assigned By - {item.assignedTo}</Text>
      <Text style={[styles.taskBubble, styles.date]}>
        Until {item.submitDate}
      </Text>
    </View>
  </TouchableOpacity>
);
const Project = () => {
  const [selected, setSelected] = useState('');
  return (
    <View style={styles.wrapper}>
      <NavBar title={'Project'} color={'#645EBC'} />
      <View style={styles.Container}>
        <Text style={styles.title}>alloted Project</Text>
        <View>
          <FlatList
            data={Data}
            keyExtractor={item => item.id.toString()}
            renderItem={Card}
            showsHorizontalScrollIndicator={false}
            refreshing={true}
            horizontal={true}
            bounces={false}
          />
        </View>
        <View style={styles.calanderBox}>
          <Calendar
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
              },
            }}
            style={styles.calendar}
            onDayPress={day => {
              console.log('selected day', day.dateString);
              setSelected(day.dateString);
            }}
            theme={{
              arrowColor: '#645dbd',
              todayTextColor: '#ffffff',
              textMonthFontFamily: 'Poppins-Medium',
              textDayStyle: {fontFamily: 'Poppins-Regular'},
              todayBackgroundColor: '#645dbd',
              selectedDayBackgroundColor: '#645dbd',
              selectedDayTextColor: '#ffffff',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Project;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffffff',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  Container: {
    width: '100%',
    height: '85%',
    backgroundColor: '#645EBC',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 25,
    position: 'absolute',
    bottom: 0,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    fontSize: 18,
    textTransform: 'capitalize',
  },
  progtext: {
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    fontSize: 18,
  },
  card: {
    width: 180,
    height: 'auto',
    backgroundColor: '#fff',
    padding: 15,
    marginRight: 10,
    borderRadius: 15,
  },
  taskBubble: {
    borderRadius: 15,
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 3,
    paddingBottom: 3,
  },
  taskType: {
    backgroundColor: '#D9D9D9',
    color: '#424242',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  progresscont: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskName: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    textTransform: 'capitalize',
    fontSize: 18,
    marginTop: 10,
  },
  date: {
    backgroundColor: '#D9D9D9',
    color: '#424242',
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
    marginTop: 10,
    padding: 15,
  },
  calanderBox: {
    marginTop: 18,
  },
  calendar: {
    borderRadius: 15,
    padding: 10,
  },
  assignedto: {
    color: '#424242',
    fontFamily: 'Poppins-Medium',
    textTransform: 'capitalize',
    fontSize: 8,
  },
});
