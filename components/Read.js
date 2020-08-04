import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function Read({data, id}) {
    console.log('Reading Text');

    return (
        <ScrollView>
            <Text style={styles.text}>{data.filter(article => article.id==id)[0].text}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 10,
        fontSize: 20,
    }
})