import React, { useState, useCallback, createContext } from 'react';
import {AsyncStorage } from 'react-native';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Main from './components/Main'
import Read from './components/Read'
import Input from './components/Input'
import ContextProvider from './ContextProvider';


const Stack = createStackNavigator();

export default function App() {

  return (
      <ContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Saurav's Diary" component={Main} />
            <Stack.Screen name="Texts" component={Read} />
            <Stack.Screen name="Article" component={Input} /> 
          </Stack.Navigator>
        </NavigationContainer>
      </ContextProvider>
  );
}
