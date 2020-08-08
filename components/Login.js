import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput, Text, KeyboardAvoidingView } from 'react-native'
import {Icon} from 'react-native-elements'
import {useFonts, GreatVibes_400Regular} from '@expo-google-fonts/great-vibes'
import { AppLoading } from 'expo';
import { Context } from '../ContextProvider';
import { useNavigation } from '@react-navigation/native'


export default function Login() {

    const navigation = useNavigation();
    navigation.setOptions({
        headerTitleStyle: {textAlign: 'center', fontFamily: 'serif', fontSize: 25,}
    })

    const {cred, setCred, logIn} = useContext(Context);
    var localName = '', localKey = '';

    let [fontsLoaded] = useFonts({GreatVibes_400Regular});

    if(!fontsLoaded) {
        return <AppLoading />
    }
    return (
        <KeyboardAvoidingView style={styles.container} behavior='position'>
            <Icon name='clipboard-pencil' type='foundation' size={100} iconStyle={styles.icon} />
            {
                !cred.firstTime ? (
                    <>
                        {(cred.key=='') ? logIn(true) : null}
                        <Text style={styles.text}>{(cred.name ? cred.name+"'s" : 'My')+" Diary"}</Text>
                        <TextInput style={styles.input} placeholder='Enter the Key'
                                    onChangeText={text => {
                                        if(text == cred.key)
                                            logIn(true);
                        }}/>
                    </>
                ) : (
                    <>
                        <Text style={styles.text}>My Diary</Text>
                        <TextInput style={styles.input} placeholder='Enter your Name...'
                                    onChangeText={text => localName=text
                        }/>
                        <TextInput style={{...styles.input, marginTop:5}} placeholder='Enter the Key...'
                                    onChangeText={text => localKey=text
                        }/>
                        <Icon name='login' type='simple-line-icon' 
                                iconStyle={styles.login}
                                onPress={() => {
                                    setCred({firstTime: false, name: localName, key: localKey});
                                }}
                        />
                    </>
                )
            }
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
    login: {
        padding: 10,
        marginTop: 5,
    },
    text: {
        marginTop: 100,
        textAlign: 'center',
        fontSize: 50,
        fontFamily: 'GreatVibes_400Regular'
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 100,
        borderWidth: 0.5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 50,
        marginTop: 100,
        fontSize: 17,
    }
})
