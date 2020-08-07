import React, { useState, useCallback, useEffect, useContext } from 'react'
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native'
import { ListItem, Icon, Button } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage' 
import { useNavigation, useFocusEffect, useIsFocused } from '@react-navigation/native'
import { Context } from '../ContextProvider'


export default function Main() {

    const {data, select} = useContext(Context);

    const navigation = useNavigation();
    const onRefresh = () => navigation.navigate("Article");

    render = ({item}) => (
        <ListItem
            title={item.title}
            leftIcon={<Icon name="code" />}
            bottomDivider
            chevron
            onPress={() => {
                select(item.id);
                return navigation.navigate("Texts")}}
        />
    )

    return (
        <View style={styles.container}>
            <FlatList
                data = {data}
                key = {item => item.id}
                renderItem = {render}
                refreshControl = {<RefreshControl refreshing={false} onRefresh={onRefresh} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    new: {
        borderWidth: 1,
        borderRadius: 50,
        height: 50,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
    }
})