import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './Main';
import DrawerContent from './DrawerContent';
import ClientHome from '../../Admin/AdminBottomNav.js/Screens/AdminHome';
import Search from '../Search';

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
