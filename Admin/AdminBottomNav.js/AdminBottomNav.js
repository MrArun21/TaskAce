import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AdminHome from './AdminHome';

const Bottom = createBottomTabNavigator();
const AdminBottomNav = () => {
  return (
    <Bottom.Navigator
      initialRouteName="AdminHome"
      screenOptions={{
        tabBarActiveTintColor: '#645EBC',
        tabBarInactiveTintColor: '#424242',
        tabBarStyle: {height: 65},
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Medium',
          fontSize: 12,
        },
      }}>
      <Bottom.Screen
        name="AdminHome"
        component={AdminHome}
        options={{
          headerShown: false,

          tabBarIcon: tabInfo => {
            // return (
            //   <Icon1
            //     name="home"
            //     size={25}
            //     color={tabInfo.focused ? '#645EBC' : '#424242'}
            //   />
            // );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default AdminBottomNav;
