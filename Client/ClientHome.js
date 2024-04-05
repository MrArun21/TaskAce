import {
  StyleSheet,
  Text,
  View,
  Alert,
  ToastAndroid,
  BackHandler,
} from 'react-native';
import React, {useState} from 'react';
import {useBackHandler} from '@react-native-community/hooks';

const ClientHome = ({navigation}) => {
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
    <View>
      <Text style={{color: '#000', alignSelf: 'center'}}>ClientHome</Text>
    </View>
  );
};

export default ClientHome;

const styles = StyleSheet.create({});
