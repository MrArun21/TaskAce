import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomCard = ({item}) => {
  return (
    <TouchableOpacity
      style={[
        styles.cardBody,
        {flexDirection: 'row', gap: 10, alignItems: 'center'},
      ]}
      activeOpacity={0.8}>
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
        </View>
      </View>
      <View style={styles.approveBtn}>
        <Text style={{fontFamily: 'Poppins-Medium', color: '#fff'}}>
          Approve
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  cardBody: {
    margin: 5,
    backgroundColor: '#c5c1ff',
    alignSelf: 'center',
    borderRadius: 10,
    gap: 4,
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
    backgroundColor: '#fff',
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
    fontSize: 16,
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
    fontSize: 9,
  },
  approveBtn: {
    backgroundColor: '#645dbd',
    height: 30,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 10,
  },
});
