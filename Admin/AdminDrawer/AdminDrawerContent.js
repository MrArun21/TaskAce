import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';

const AdminDrawerContent = ({navigation}) => {
  const logOut = () => {
    Alert.alert('', 'Are you sure you want to Logout ?', [
      {
        text: 'No',
        onPress: () => null,
      },
      {
        text: 'Yes',
        onPress: () => {
          navigation.navigate('Cradentials');
        },
      },
    ]);
  };
  return (
    <View style={styles.Container}>
      <View style={styles.banner}>
        <View>
          <Image
            source={require('../../assets/man.jpg')}
            style={styles.profile}
          />
        </View>
        <View>
          <Text style={styles.name}>Kim Black</Text>
          <Text style={styles.test2}>FullStack Devloper</Text>
          <Text style={styles.test2}>Id-1234567890</Text>
          <Text style={styles.test2}>GST NO.-1234567890XXX</Text>
        </View>
      </View>
      <View style={styles.lowerBox}>
        <View style={styles.MenuList}>
          <Text style={styles.Menutxt}>Profile</Text>
          <Text
            style={styles.Menutxt}
            onPress={() => {
              navigation.navigate('AddUser');
            }}>
            Add Users
          </Text>
          <Text style={styles.Menutxt}>Employee</Text>
          <Text style={styles.Menutxt}>Work History</Text>
          <Text style={styles.Menutxt}>Settings</Text>
          <Text style={styles.Menutxt} onPress={logOut}>
            Logout
          </Text>
        </View>

        <TouchableOpacity
          style={styles.LogoutBtn}
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate('Plans');
          }}>
          <Text style={styles.logouttxt}>Upgrade Plan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdminDrawerContent;
const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
  banner: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
    borderColor: '#645EBC',
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#645EBC',
  },
  name: {
    color: '#645EBC',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  test2: {color: '#645EBC', fontFamily: 'Poppins-Regular', fontSize: 12},
  MenuList: {
    gap: 30,
    paddingTop: 30,
  },
  Menutxt: {
    color: '#645EBC',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    marginLeft: 10,
  },
  LogoutBtn: {
    width: 200,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#645EBC',
    borderRadius: 50,
    position: 'absolute',
    bottom: 30,
  },
  logouttxt: {
    color: '#ffffff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    alignSelf: 'center',
  },
  lowerBox: {
    width: '100%',
    height: '85%',
    position: 'relative',
  },
});
