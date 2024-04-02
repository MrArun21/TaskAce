import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import NavBar2 from './NavBar2';
import Icon2 from 'react-native-vector-icons/FontAwesome';
const Chats = ({navigation}) => {
  // Get current date
  const currentDate = new Date();
  // Get the date to display
  const displayDate = new Date(); // You can set your own date here, if you want to test other dates

  // Determine if the date is today, tomorrow, or yesterday
  let dateInfo = '';
  if (displayDate.toDateString() === currentDate.toDateString()) {
    dateInfo = 'Today';
  } else {
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (displayDate.toDateString() === tomorrow.toDateString()) {
      dateInfo = 'Tomorrow';
    } else {
      const yesterday = new Date(currentDate);
      yesterday.setDate(yesterday.getDate() - 1);
      if (displayDate.toDateString() === yesterday.toDateString()) {
        dateInfo = 'Yesterday';
      }
    }
  }

  // Format the date
  const formattedDate =
    `${displayDate.getDate().toString().padStart(2, '0')}-` +
    `${(displayDate.getMonth() + 1).toString().padStart(2, '0')}-` +
    `${displayDate.getFullYear()}`;

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = text => {
    setInputValue(text);
  };

  const handleButtonPress = () => {
    if (inputValue === '') {
      return null;
    } else {
      console.log(inputValue);
      setInputValue('');
    }
  };
  return (
    <View style={styles.wrapper}>
      <NavBar2 title={'chats'} />
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{dateInfo}</Text>
          <Text style={styles.titleText}>{formattedDate}</Text>
        </View>
        <ScrollView style={styles.MessageContainer}>
          <Text style={[styles.SenderName, {color: '#5EB462'}]}>| ron</Text>
          <Text style={styles.Message}>Hello</Text>
          <Text style={[styles.SenderName, {color: '#E83C3C'}]}>
            | Arun(Boss)
          </Text>
          <Text style={styles.Message}>Meet at the lobby?</Text>
        </ScrollView>
        <View style={styles.MessageInput}>
          <TextInput
            style={styles.searchBar}
            placeholder="Type something..."
            onChangeText={handleInputChange}
            value={inputValue}
            placeholderTextColor="#7570C4"
            color="#7570C4"
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => handleButtonPress()}
            activeOpacity={0.9}>
            <Icon2 name="send" size={20} color="#645EBC" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Chats;
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#645EBC',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '85%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    position: 'absolute',
    bottom: 0,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#424242',
  },
  MessageContainer: {
    paddingTop: 12,
    marginBottom: 12,
  },
  SenderName: {
    fontFamily: 'Poppins-Bold',
    textTransform: 'capitalize',
    fontSize: 14,
  },
  Message: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#424242',
  },
  MessageInput: {
    backgroundColor: '#D9D9D9',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
