import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Chats from './Chats';
import Project from './Project';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Notification from './Notification';

const Bottom = createBottomTabNavigator();
const BotttomNavigation = () => {
  return (
    <Bottom.Navigator
      initialRouteName="Home"
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
        name="Home"
        component={Home}
        options={{
          headerShown: false,

          tabBarIcon: tabInfo => {
            return (
              <Icon1
                name="home"
                size={25}
                color={tabInfo.focused ? '#645EBC' : '#424242'}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="projects"
        component={Project}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Icon
                name="folder"
                size={25}
                color={tabInfo.focused ? '#645EBC' : '#424242'}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="chats "
        component={Chats}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Icon2
                name="chatbubbles-outline"
                size={30}
                color={tabInfo.focused ? '#645EBC' : '#424242'}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Notifications"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Icon2
                name="notifications-outline"
                size={30}
                color={tabInfo.focused ? '#645EBC' : '#424242'}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BotttomNavigation;
