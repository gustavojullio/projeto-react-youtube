
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Tela1 from './src/Telas/TelaPrincipal/Tela1';
import Tela2 from './src/Telas/TelaAssistirMaisTarde/Tela2';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [videosCurtidos, setVideosCurtidos] = useState([]);

  const atualizarCurtidasVideos = (atualizarVideos) => {
    const curtidos = atualizarVideos.filter((video) => video.liked);
    setVideosCurtidos(curtidos);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Início'
        activeColor='#FF0000' 
        inactiveColor='#757575'
        barStyle={{ backgroundColor: '#FFFFFF' }}
      >
        <Tab.Screen
          name='Início'
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='home' color={color} size={24} />
            ),
          }}
        >
          {(props) => <Tela1 {...props} atualizarCurtidasVideos={atualizarCurtidasVideos} />}
        </Tab.Screen>
        <Tab.Screen
          name='Gostei'
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='heart' color={color} size={24} />
            ),
          }}
        >
          {(props) => <Tela2 {...props} videosCurtidos={videosCurtidos} />}
        </Tab.Screen>
      </Tab.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
