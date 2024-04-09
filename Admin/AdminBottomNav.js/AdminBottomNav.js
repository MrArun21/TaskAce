import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import AdminHome from './Screens/AdminHome';
import Project from './Screens/Project';
import Chat from './Screens/Chat';
import Notification from './Screens/Notification';
import AddProject from './Screens/AddProject';

const Bottom = createBottomTabNavigator();
const AdminBottomNav = () => {
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#645EBC',
        tabBarInactiveTintColor: '#424242',
        tabBarStyle: {height: 65},
        lazyLoad: true,
        animationEnabled: false,
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Medium',
          fontSize: 12,
        },
      }}>
      <Bottom.Screen
        name="Home"
        component={AdminHome}
        options={{
          headerShown: false,

          tabBarIcon: tabInfo => {
            return (
              <Icon1
                name="home"
                size={25}
                color={tabInfo.focused ? '#645EBC' : '#424242'}
                height={25}
                width={25}
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
                height={25}
                width={25}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="AddProject"
        component={AddProject}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Icon2
                name="add-circle"
                size={55}
                color={'#645EBC'}
                height={50}
                width={55}
              />
            );
          },

          tabBarLabel: '',
        }}
      />
      <Bottom.Screen
        name="chats "
        component={Chat}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Icon2
                name="chatbubbles-outline"
                size={30}
                color={tabInfo.focused ? '#645EBC' : '#424242'}
                height={30}
                width={30}
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
                height={30}
                width={30}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default AdminBottomNav;
