import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default function Input() {

    const [value, setValue] = useState("")

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.text}
                multiline
                autoFocus={true}
                placeholder='Got something on your mind?'
                onChangeText={text => setValue(text)}
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
