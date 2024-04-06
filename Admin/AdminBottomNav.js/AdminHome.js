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
import {useNavigation, DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon2 from 'react-native-vector-icons/FontAwesome';
const AdminHome = () => {
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
          <Text style={styles.title}>Company Name</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
        </View>
        <View style={styles.Right}>
          <View style={styles.Icon}>
            <Icon2 name="search" size={25} color="#645ebc" />
            <Icon
              name="bars-staggered"
              size={25}
              color="#645ebc"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
            />
          </View>
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
    width: '50%',
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
  },
});
