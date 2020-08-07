import React, { useState, useEffect, useCallback, useContext } from 'react'
import { View, TextInput, StyleSheet, AsyncStorage } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { Context } from '../ContextProvider'

const shortid = require('shortid')

export default function Input() {

    const {data, setData} = useContext(Context);
    
    var localdata = ''; 

    useFocusEffect(useCallback(() => {
        return () => {
            if(localdata != "") {
                setData([...data, {id: shortid(), title: (new Date).toLocaleString(), text: localdata}])
            }
        }
    }))

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.text}
                multiline
                autoFocus={true}
                placeholder='Got something on your mind?'
                onChangeText={text => localdata=text}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        flex: 1,
        textAlignVertical: 'top',
        padding: 10,
        fontSize: 20,
    }
})
