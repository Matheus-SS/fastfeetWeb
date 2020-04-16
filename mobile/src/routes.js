import React from 'react';
import {useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignIn from './pages/SignIn';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  const Signed = useSelector((state) => state.auth.signed);

  return (
    <>
      {Signed ? (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#7D40E7',
            inactiveTintColor: '#999999',
            labelStyle: {
              fontSize: 14,
            },
          }}>
          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              unmountOnBlur: true,
              tabBarLabel: 'Entregas',
              tabBarIcon: ({color}) => (
                <Icon name="reorder" size={20} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Meu perfil',
              tabBarIcon: ({color}) => (
                <Icon name="account-circle" size={20} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator headerMode="none" initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      )}
    </>
  );
}
