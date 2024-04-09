import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = text => {
    setInputValue(text);
  };

  const handleButtonPress = () => {
    if (inputValue === '') {
      return Alert.alert('Error', "You can't search for nothing!");
    } else {
      console.log(inputValue);
      setInputValue('');
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.nav}>
        <Icon
          name="angle-left"
          size={25}
          color="#645EBC"
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={styles.title}>Search</Text>
      </View>
      <View style={{position: 'relative', width: '100%'}}>
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
          <Icon2 name="search" size={25} color="#645EBC" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    padding: 20,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: '#635dbc',
    fontSize: 32,
  },

  searchBar: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    borderColor: '#635dbc',
    borderWidth: 2,
    padding: 10,
    paddingRight: 50,
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    position: 'absolute',
    right: '8%',
    top: 10,
    backgroundColor: '#ffffff',
  },
});
