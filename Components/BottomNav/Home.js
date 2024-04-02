import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
  ToastAndroid,
  BackHandler,
} from 'react-native';
import React, {useState} from 'react';
import TaskCardCustom from '../../Components/TaskCardCustom';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Data from '../../DemoData';
import * as Progress from 'react-native-progress';
import Icon1 from 'react-native-vector-icons/FontAwesome6';
import {useBackHandler} from '@react-native-community/hooks';

const Home = ({navigation}) => {
  const [backPressCount, setBackPressCount] = useState(0);

  const [clicked, setclicked] = useState(0);
  const [Filter, setFilter] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const newData = Data.filter(item => {
    if (Filter === '') {
      return item.status;
    } else {
      return item.status === Filter;
    }
  });
  const handleClick = (num, status) => {
    setclicked(num);
    setFilter(status);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.cardBody}
      activeOpacity={0.8}
      onPress={() => {
        setSelectedItem(item);
        setModalVisible(true);
      }}>
      <View style={styles.cardBody}>
        <View>
          <View style={styles.cardTop}>
            <View style={styles.cardTopBubble}>
              <Text style={[styles.taskBubble, styles.taskType]}>
                {item.type}
              </Text>
              {item.priority === 'High' && (
                <Text style={[styles.taskBubble, styles.taskPriorityHigh]}>
                  {item.priority}
                </Text>
              )}
              {item.priority === 'Low' && (
                <Text style={[styles.taskBubble, styles.taskPriorityLow]}>
                  {item.priority}
                </Text>
              )}
              {item.priority === 'Medium' && (
                <Text style={[styles.taskBubble, styles.taskPriorityMedium]}>
                  {item.priority}
                </Text>
              )}
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Icon1 name="clock-rotate-left" size={15} color="#424242" />
              <Text style={styles.taskTime}>{item.time}</Text>
            </View>
          </View>
        </View>
        <View style={styles.TitleContainer}>
          <Text style={styles.Taskname}>
            {item.name.substring(0, 230) + '...'}
          </Text>
          <View style={styles.assignedToContainer}>
            <Text style={styles.assignedto}>
              Assigned By - {item.assignedTo}
            </Text>
            <Text style={styles.assignedto}>
              submit Date - {item.submitDate}
            </Text>
          </View>
          {item.status === 'Open' && (
            <Text style={[styles.taskBubble, styles.taskStatusOpen]}>
              {item.status}
            </Text>
          )}
          {item.status === 'In Progress' && (
            <Text style={[styles.taskBubble, styles.taskStatusInProgress]}>
              {item.status}
            </Text>
          )}
          {item.status === 'Completed' && (
            <Text style={[styles.taskBubble, styles.taskStatusCompleted]}>
              {item.status}
            </Text>
          )}
          {item.status === 'Over Due' && (
            <Text style={[styles.taskBubble, styles.taskStatusOverDue]}>
              {item.status}
            </Text>
          )}
        </View>
        <View style={styles.progressBar}>
          <Progress.Bar
            progress={item.progress / 10}
            width={280}
            color={item.status === 'Over Due' ? '#fe0000' : '#645EBC'}
            backgroundColor={'#D9D9D9'}
            borderWidth={0}
          />
          <Text style={styles.progressCount}>{item.progress * 10}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
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
    <View style={{backgroundColor: '#ffffff'}}>
      <View style={styles.Container}>
        <View>
          <Text style={styles.Name}>kim black</Text>
          <Text style={styles.Title}>fullStack Engineer</Text>
        </View>
        <View style={styles.profileBox}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Cradentials')}>
            <Image
              source={require('../../assets/man.jpg')}
              style={styles.profile}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.deshTitleBox}>
        <Text style={styles.DesTitle}>My tasks</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Search')}>
          <Icon2 name="search" size={25} color="#645EBC" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.Deshnav}>
        <TouchableOpacity
          style={[
            {borderColor: clicked === 0 ? '#645EBC' : '#ffffff'},
            styles.Navlink,
          ]}
          onPress={() => handleClick(0, '')}
          activeOpacity={0.9}>
          <Text style={styles.Navlinktext}>all</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {borderColor: clicked === 1 ? '#645EBC' : '#ffffff'},
            styles.Navlink,
          ]}
          activeOpacity={0.9}
          onPress={() => handleClick(1, 'In Progress')}>
          <Text style={styles.Navlinktext}>In Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {borderColor: clicked === 3 ? '#645EBC' : '#ffffff'},
            styles.Navlink,
          ]}
          activeOpacity={0.9}
          onPress={() => handleClick(3, 'Completed')}>
          <Text style={styles.Navlinktext}>completed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {borderColor: clicked === 2 ? '#645EBC' : '#ffffff'},
            styles.Navlink,
          ]}
          activeOpacity={0.9}
          onPress={() => handleClick(2, 'Over Due')}>
          <Text style={styles.Navlinktext}>Over Due</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.DeshBack}>
        <View style={styles.list}>
          <FlatList
            data={newData}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            refreshing={true}
          />
          <TaskCardCustom
            visible={modalVisible}
            closeModal={() => setModalVisible(false)}
            item={selectedItem}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '16%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#ffffff',
  },

  Name: {
    fontFamily: 'Poppins-Bold',
    color: '#645EBC',
    fontSize: 26,
    textTransform: 'capitalize',
  },
  Title: {
    fontFamily: 'Poppins-Medium',
    color: '#645EBC',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  profileBox: {},
  profile: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#645EBC',
  },
  DesTitle: {
    fontFamily: 'Poppins-Bold',
    color: '#645EBC',
    fontSize: 32,
    textTransform: 'capitalize',
  },
  deshTitleBox: {
    width: '100%',
    height: '12%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  icon: {
    marginRight: 30,
  },
  DeshBack: {
    width: '100%',
    height: '80%',
    backgroundColor: '#645EBC',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 25,
  },
  Deshnav: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  Navlink: {
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  Navlinktext: {
    fontFamily: 'Poppins-Regular',
    color: '#645EBC',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  list: {
    height: '70%',
  },
  //card Design
  cardBody: {
    flex: 1,
    width: '100%',
    margin: 10,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    gap: 6,
  },
  taskTitle: {
    color: '#000000',
    textTransform: 'capitalize',
  },
  taskBubble: {
    borderRadius: 15,
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 3,
    paddingBottom: 3,
    alignSelf: 'flex-start',
  },
  taskType: {
    backgroundColor: '#D9D9D9',
    color: '#424242',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  taskPriorityHigh: {
    backgroundColor: '#FCC0C0',
    color: '#FF0000',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  taskPriorityLow: {
    backgroundColor: '#C0FCCE',
    color: '#058F3C',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  taskPriorityMedium: {
    backgroundColor: '#FCDDC0',
    color: '#FF7A00',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  cardTop: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cardTopBubble: {flexDirection: 'row', alignItems: 'center', gap: 5},
  taskTime: {
    color: '#424242',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  TitleContainer: {
    position: 'relative',
  },
  Taskname: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    textTransform: 'capitalize',
    fontSize: 14,
  },
  assignedToContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  assignedto: {
    color: '#424242',
    fontFamily: 'Poppins-Medium',
    textTransform: 'capitalize',
    fontSize: 8,
  },
  taskStatusOpen: {
    backgroundColor: '#FF7A00',
    color: '#ffffff',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    position: 'absolute',
    right: 0,
  },
  taskStatusInProgress: {
    backgroundColor: '#17A1FA',
    color: '#ffffff',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    position: 'absolute',
    right: 0,
  },
  taskStatusCompleted: {
    backgroundColor: '#58A457',
    color: '#ffffff',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    position: 'absolute',
    right: 0,
  },
  taskStatusOverDue: {
    backgroundColor: '#fe0000',
    color: '#ffffff',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    position: 'absolute',
    right: 0,
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressCount: {
    color: '#010101',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
});
