import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'; // Ícones bonitos e fáceis
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ReportsScreen from '../screens/ReportsScreen';
import TaskScreen from '../screens/TaskScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Tarefas" component={TaskScreen} />
    </Stack.Navigator>
);

const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
                const icon = route.name === 'HomeTab' ? 'home' : 'settings';
            return <Ionicons name={icon} size={size} color={color} />;
            },

            tabBarStyle: {
                backgroundColor: 'black', // cor do menu inferior
                borderTopColor: '#000',     // opcional: borda de cima
                height: 60,                 // opcional: altura do menu
            },
            tabBarActiveTintColor: '#fff',   // cor do ícone/texto ativo
            tabBarInactiveTintColor: '#ccc', // cor do ícone/texto inativo
        })}
    >
        <Tab.Screen name="HomeTab" component={HomeStack} options={{title: 'Início' }} />
        <Tab.Screen name="ReportsTab" component={ReportsScreen} options={{ title: 'Relatórios' }} />
        {/* Você pode adicionar outras abas aqui */}
    </Tab.Navigator>
    
);

export default TabNavigator;