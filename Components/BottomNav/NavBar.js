import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {useNavigation, DrawerActions} from '@react-navigation/native';

const NavBar = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <View style={styles.Right}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.Icon}>
          <Icon2
            name="search"
            size={25}
            color="#645EBC"
            onPress={() => navigation.navigate('Search')}
          />
          <Icon
            name="bars-staggered"
            size={25}
            color="#645EBC"
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
          />
        </View>
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '16%',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  Right: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: '#645EBC',
    fontSize: 42,
    textTransform: 'capitalize',
  },
  Icon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  discription: {
    fontFamily: 'Poppins-Medium',
    color: '#645EBC',
    fontSize: 14,
    marginLeft: 20,
  },
});
