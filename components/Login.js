import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput, Text, KeyboardAvoidingView } from 'react-native'
import {Icon} from 'react-native-elements'
import {useFonts, GreatVibes_400Regular} from '@expo-google-fonts/great-vibes'
import { AppLoading } from 'expo';
import { Context } from '../ContextProvider';

export default function Login() {

    const {key, setKey, logIn} = useContext(Context);

    let [fontsLoaded] = useFonts({GreatVibes_400Regular});

    if(!fontsLoaded) {
        return <AppLoading />
    }
    return (
        <KeyboardAvoidingView style={styles.container} behavior='position'>
            <Icon name='lock' type='feather' size={100} iconStyle={styles.icon} />
            <Text style={styles.text}>Saurav's Diary</Text>
            <TextInput style={styles.input} placeholder='Enter the Key'
                        onChangeText={text => {
                            if(text == key)
                                logIn(true);
                        }}/>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    icon: {
        alignSelf: 'center',
        marginTop: 95,
    },
    text: {
        marginTop: 100,
        textAlign: 'center',
        fontSize: 50,
        fontFamily: 'GreatVibes_400Regular'
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 0.5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 50,
        marginTop: 100,
    }
})
