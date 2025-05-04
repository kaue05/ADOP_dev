// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import '@expo/metro-runtime'

import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

SplashScreen.preventAutoHideAsync(); // impede que o splash desapareça antes da hora

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
          'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
          'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
          'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
          'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
          'Lato-Thin': require('./assets/fonts/Lato-Thin.ttf'),
          // adicione outras variações aqui, se quiser
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync(); // esconde o splash quando estiver tudo pronto
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null; // espera carregar as fontes
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </View>
  );
}