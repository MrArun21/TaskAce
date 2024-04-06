import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Admin from './Admin';

import AdminDrawerContent from './AdminDrawerContent';

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
    </Drawer.Navigator>
  );
};

export default AdminDrawerNav;
