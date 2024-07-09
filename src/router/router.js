import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Detail from '../pages/Detail/Detail';
import Favorites from '../pages/Favorites/Favorites';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);

const HomeTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Jobs" component={Home} />
    <Tab.Screen name="Favorites" component={Favorites} />
  </Tab.Navigator>
);

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={HomeStack} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
