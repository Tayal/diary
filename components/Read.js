import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Context } from '../ContextProvider'

export default function Read() {

    const {data, selected} = useContext(Context);

    return (
        <ScrollView>
            <Text style={styles.text}>{data.filter(article => article.id==selected)[0].text}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 10,
        fontSize: 20,
    }
})