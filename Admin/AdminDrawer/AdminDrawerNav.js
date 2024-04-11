import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Admin from './Admin';

import AdminDrawerContent from './AdminDrawerContent';
import Plans from '../AdminBottomNav.js/Screens/Plans';
import Search from '../AdminBottomNav.js/Screens/Search';
import AddUser from '../AdminBottomNav.js/Screens/AddUser';

const Drawer = createDrawerNavigator();
const AdminDrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <AdminDrawerContent {...props} />}>
      <Drawer.Screen
        name="Admin"
        component={Admin}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Plans"
        component={Plans}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="AddUser"
        component={AddUser}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default AdminDrawerNav;
