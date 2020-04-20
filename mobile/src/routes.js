import React from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignIn from './pages/SignIn';

import Profile from './pages/Profile';

import Dashboard from './pages/Home/Dashboard';
import Details from './pages/Home/Details';
import Problems from './pages/Home/Problems';
import ShowProblems from './pages/Home/ShowProblems';
import Confirm from './pages/Home/Confirm';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTransparent: true,
      }}>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerTitle: 'Detalhes da encomenda'}}
      />

      <Stack.Screen
        name="Problems"
        component={Problems}
        options={{headerTitle: 'Informar problema'}}
      />

      <Stack.Screen
        name="ShowProblems"
        component={ShowProblems}
        options={{headerTitle: 'Visualizar problemas'}}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{headerTitle: 'Confirmar entrega'}}
      />
    </Stack.Navigator>
  );
}

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
            name="Home"
            component={Home}
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
