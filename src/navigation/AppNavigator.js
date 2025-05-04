import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            // gestureEnabled: true,
            // gestureDirection: 'horizontal',
            // animation: 'slide_from_right', // essa animação só funciona com createStackNavigator
        }}
    >
        <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ title: 'Profile' }}
        />
    </Stack.Navigator>
);

export default AppNavigator;
