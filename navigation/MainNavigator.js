import React, { useContext } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Main from '../components/Main'
import Read from '../components/Read'
import Input from '../components/Input'
import Login from '../components/Login'
import { Context } from '../ContextProvider'

const Stack = createStackNavigator();

export default function MainNavigator() {

    const {loggedIn, logIn, cred} = useContext(Context);

    return (
        <NavigationContainer>
          <Stack.Navigator>
            {loggedIn ? (
              <>
                <Stack.Screen name={(cred.name ? cred.name+"'s" : 'My') + ' Diary'} component={Main} />
                <Stack.Screen name="Reading" component={Read} />
                <Stack.Screen name="Input" component={Input} /> 
              </>
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
    )
}
