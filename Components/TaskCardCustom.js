import React, {useEffect, useState} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  BackHandler,
} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import Icon1 from 'react-native-vector-icons/FontAwesome6';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Progress from 'react-native-progress';
const TaskCardCustom = ({visible, closeModal, item, updateItem}) => {
  if (!item) {
    return null;
  }

  const [tasks, setTasks] = useState(item.task);
  const [selectedTasks, setSelectedTasks] = useState([]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        closeModal();
        return true; // Return true to prevent default behavior (exit app)
      },
    );

    return () => backHandler.remove(); // Remove the event listener when component unmounts
  }, []);
  useEffect(() => {
    setTasks(item.task);
  }, [item.task]);

  const toggleTask = id => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? {...task, checked: !task.checked} : task,
    );
    setTasks(updatedTasks);

    // Update the item.task in the parent component
    const updatedItem = {...item, task: updatedTasks};
    updateItem(updatedItem);
  };

  const submitTasks = () => {
    const selected = tasks.filter(task => task.checked);
    setSelectedTasks(selected);
    if (selected.length === 0) {
      console.log('No Task Completed');
      console.log(
        'Selected Tasks:',
        selected,
        'Task Name :',
        item.name,
        '| ID: ',

        item.id,
      );
    } else if (selected.length === item.task.length) {
      console.log('All Task Completed');
      console.log(
        'Selected Tasks:',
        selected,
        'Task Name :',
        item.name,
        '| ID: ',

        item.id,
      );
    } else {
      console.log(
        'Selected Tasks:',
        selected,
        'Task Name :',
        item.name,
        '| ID: ',

        item.id,
      );
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}>
      <View style={styles.wrapper}>
        <View style={styles.cardBody}>
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
          <View style={styles.TitleContainer}>
            <Text style={styles.Taskname}>{item.name}</Text>
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
              width={windowWidth - 100}
              color={item.status === 'Over Due' ? '#fe0000' : '#645EBC'}
              backgroundColor={'#D9D9D9'}
              borderWidth={0}
            />
            <Text style={styles.progressCount}>{item.progress * 10}%</Text>
          </View>
          <View style={styles.todoList}>
            <FlatList
              data={tasks}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <View style={{marginBottom: 10}}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.todoBox}
                    onPress={() => toggleTask(item.id)}>
                    <Icon2
                      name={
                        item.checked
                          ? 'checkbox-marked-outline'
                          : 'checkbox-blank-outline'
                      }
                      size={20}
                      color="#424242"
                    />
                    <Text style={styles.todoTxt}>{item.task}</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
          <View style={styles.btnBox}>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={() => {
                console.log(item.link);
              }}>
              <Icon1 name="github" size={15} color="#fff" />
              <Text style={styles.submit}>GitHub</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={submitTasks}
              activeOpacity={0.8}>
              <Text style={styles.submit}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskCardCustom;
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#645dbd',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 20,
    width: '100%',
    height: '58%',
    position: 'absolute',
    bottom: 65,
  },
  cardBody: {
    position: 'relative',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: '100%',
    padding: 12,
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
    fontSize: 22,
    marginTop: 40,
  },
  assignedToContainer: {
    alignItems: 'flex-start',
    marginTop: 10,
  },
  assignedto: {
    color: '#424242',
    fontFamily: 'Poppins-Medium',
    textTransform: 'capitalize',
    fontSize: 10,
  },
  taskStatusOpen: {
    backgroundColor: '#FF7A00',
    color: '#ffffff',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    position: 'absolute',
    left: 0,
    top: 10,
  },
  taskStatusInProgress: {
    backgroundColor: '#17A1FA',
    color: '#ffffff',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    position: 'absolute',
    left: 0,
    top: 10,
  },
  taskStatusCompleted: {
    backgroundColor: '#58A457',
    color: '#ffffff',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    position: 'absolute',
    left: 0,
    top: 10,
  },
  taskStatusOverDue: {
    backgroundColor: '#fe0000',
    color: '#ffffff',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    position: 'absolute',
    left: 0,
    top: 10,
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  progressCount: {
    color: '#010101',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  btn: {
    backgroundColor: '#645EBC',
    height: 40,
    width: '48%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    borderRadius: 8,
  },
  submit: {
    color: '#ffffff',
    fontFamily: 'Poppins-Medium',
    textTransform: 'capitalize',
  },
  btnBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    alignSelf: 'center',
  },
  todoList: {
    height: windowHeight - 650,
    paddingTop: 10,
    paddingBottom: 10,
  },
  todoTxt: {
    color: '#424242',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
  },
  todoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    width: '92%',
  },
});
