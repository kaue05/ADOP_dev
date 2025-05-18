import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'; // Ícones bonitos e fáceis
import HomeScreen from '../screens/HomeScreen';
import ReportsScreen from '../screens/ReportsScreen';
import TaskScreen from '../screens/TaskScreen';
import AppNavigator from './AppNavigator';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
    <Stack.Navigator
            screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animation: 'slide_from_right',
            headerStyle: {
                backgroundColor: '#f2f2f2', // Cor da barra
                height: 50, // Altura da header
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTintColor: '#000', // Cor dos textos e ícones
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 18,
                alignSelf: 'center',
                fontFamily: ''
            },
            headerTitleAlign: 'left', // Alinhamento do título
        }}>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Tarefas" component={TaskScreen} />

        {/* Exemplo de configurações do AppNavigator de uma pagina individual */}
        {/* <Stack.Screen
            name="Profile"
            component={ProfileScreen} 
            options={{
                title: 'Página Inicial',
                headerStyle: {
                    backgroundColor: 'green',
                },
                headerTitleStyle: {
                    fontSize: 28,
                },
            }}
        /> */}
    </Stack.Navigator>
);

const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'HomeTab') {
                iconName = 'home';
            } else if (route.name === 'ReportsTab') {
                iconName = 'bar-chart';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
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