import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);

export default AppNavigator;
