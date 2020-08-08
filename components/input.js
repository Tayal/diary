import React, { useState, useEffect, useCallback, useContext } from 'react'
import { View, Text, TextInput, StyleSheet, AsyncStorage } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { Context } from '../ContextProvider'

const shortid = require('shortid')

export default function Input() {

    const {data, setData, editing, selected, edit} = useContext(Context);

    const navigation = useNavigation();
    navigation.setOptions({
        headerTitle: () => <TextInput style={styles.header} defaultValue={localdata.title} onChangeText={text => localdata.title=text}/>
    })

    var localdata = {id: shortid(), title: (new Date).toLocaleString(), text: ''};
    if(editing) {
        const filtered = data.filter((item) => item.id == selected);
        if(filtered.length)
            localdata = filtered[0];
    } 

    useFocusEffect(useCallback(() => {
        return () => {
            if(editing) {
                edit(false);
                setData([...data.filter((item) => item.id != selected), localdata]);
            }
            else if(localdata.text != '') {
                setData([...data, localdata])
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
                defaultValue={localdata.text}
                onChangeText={text => localdata.text=text}
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
    },
    header: {
        fontSize: 22,
        fontFamily: 'serif',
    },
})
