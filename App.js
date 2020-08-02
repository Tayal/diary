import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Main from './components/main'
import Texts from './components/text'
import Input from './components/input'
import {data} from './assets/data'

const Stack = createStackNavigator();

export default function App() {

  const [selected, setselected] = useState("1");

  const Text = () => <Texts id={selected} />
  const Mainc = () => <Main changeId={(id) => setselected(id)}/>

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Saurav's Diary" component={Mainc} />
          <Stack.Screen name="Texts" component={Text} options={{title: data.filter(article => article.id==selected)[0].title}} />
          <Stack.Screen name="Article" component={Input} /> 
        </Stack.Navigator>
      </NavigationContainer>
  );
}
