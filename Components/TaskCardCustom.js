import React from 'react';
import {Modal, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome6';
import * as Progress from 'react-native-progress';
const TaskCardCustom = ({visible, closeModal, item}) => {
  // Add a null check for item
  // Satyam null check hai tere liya
  if (!item) {
    return null;
  }

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
              width={280}
              color={item.status === 'Over Due' ? '#fe0000' : '#645EBC'}
              backgroundColor={'#D9D9D9'}
              borderWidth={0}
            />
            <Text style={styles.progressCount}>{item.progress * 10}%</Text>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={closeModal}
            activeOpacity={0.8}>
            <Text style={styles.showLess}>Show Less</Text>
          </TouchableOpacity>
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
    height: '57.7%',
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
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    position: 'absolute',
    bottom: 10,
  },
  showLess: {
    color: '#ffffff',
    fontFamily: 'Poppins-Medium',
    textTransform: 'capitalize',
  },
});
