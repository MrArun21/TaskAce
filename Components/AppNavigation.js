import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Getstarted from './Getstarted';
import SpleshScreen from './SpleshScreen';
import Login from './Login';
import Cradentials from './Cradentials';
import Dashboard from './Dashboard';
import Search from './Search';
const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer orientation="portrait">
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={SpleshScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Getstarted"
          component={Getstarted}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cradentials"
          component={Cradentials}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
