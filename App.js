import React, { useState, useCallback } from 'react';
import {AsyncStorage } from 'react-native';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Main from './components/Main'
import Read from './components/Read'
import Input from './components/Input'

const Stack = createStackNavigator();

export default function App() {

  const [value, setValue] = useState("")
  const [selected, setselected] = useState("0");
  console.log('selected = ' + selected);

  var data=[{id:'0', title:'ReadMe', text:'Pull to write new article.\nArticles are autosaved.\nEnjoy!'}];
  (async () => {
      try {
          const fetched = await AsyncStorage.getItem('data')
          if(fetched !== null) {
              console.log('Successfully Fetched data on stack screen')
              data = JSON.parse(fetched)
              console.log(data)
          }
      }
      catch(err) {
          console.log(err)
      }
  })()

  const Readc = () => <Read data={data} id={selected} />
  const Mainc = () => <Main changeId={(id) => setselected(id)} />
  const Inputc = () => <Input changeValue={(text) => setValue(text)} />

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Saurav's Diary" component={Mainc} />
          <Stack.Screen name="Texts" component={Readc} options={{title: data.filter(article => article.id==selected)[0].title}} />
          <Stack.Screen name="Article" component={Inputc} /> 
        </Stack.Navigator>
      </NavigationContainer>
  );
}
