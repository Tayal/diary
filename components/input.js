import React, { useState, useEffect, useCallback } from 'react'
import { View, TextInput, StyleSheet, AsyncStorage } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
const shortid = require('shortid')


var data=[];
(async () => {
    try {
        const fetched = await AsyncStorage.getItem('data')
        if(fetched !== null) {
            data = JSON.parse(fetched)
        }
    }
    catch(err) {
        console.log('Error! Not able to read data.')
    }
})()

export default function Input({changeValue}) {

    var local = "";

    const addtodata = () => {

        if(local != "") {
            data.push({
                id: shortid.generate(),
                title: Date.now().toString(),
                text: local,
            })
        }
        
        AsyncStorage.setItem('data', JSON.stringify(data));
    }

    useFocusEffect(useCallback(() => {
        return () => addtodata();
    }))

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.text}
                multiline
                autoFocus={true}
                placeholder='Got something on your mind?'
                onChangeText={text => local=text}
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
