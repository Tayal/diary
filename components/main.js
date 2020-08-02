import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native'
import { ListItem, Icon, Button } from 'react-native-elements'
import {data} from '../assets/data'
import { useNavigation } from '@react-navigation/native'

export default function Main({changeId}) {

    const navigation = useNavigation();

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        return navigation.navigate("Article")
    };

    render = ({item}) => (
        <ListItem
            title={item.title}
            leftIcon={<Icon name="code" />}
            bottomDivider
            chevron
            onPress={() => {changeId(item.id);
                return navigation.navigate("Texts")}}
        />
    )

    return (
        <View style={styles.container}>
            <FlatList
                data = {data}
                key = {item => item.id}
                renderItem = {render}
                refreshControl = {<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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