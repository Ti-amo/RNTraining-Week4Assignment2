import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './src/screens/Dashboard'
import ProfileScreen from './src/screens/Profile'
import DetailProductScreen from './src/screens/DetailProduct'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="DetailProduct" component={DetailProductScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#FF958F',
          inactiveTintColor: '#989898',
          showLabel: false
        }}

      >
        <Tab.Screen
          name="Dashboard"
          component={MyStack}
          options={{
            // tabBarLabel: 'Dashboard',
            tabBarIcon: ({ color, size }) => (
              <Text style={{fontSize: 18}}>Dashboard</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          
          options={{
            // tabBarLabel: 'Profile',

            tabBarIcon: ({ color, size }) => (
              <Text style={{fontSize: 18}}>Profile</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}