import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native'
import { ListItem, Icon, Button } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage' 
import { useNavigation, useFocusEffect, useIsFocused } from '@react-navigation/native'


export default function Main({changeId}) {

    const navigation = useNavigation();

    const [refreshing, setRefreshing] = useState(false);
    //const [data, setData] = useState([]);

    const onRefresh = () => {
        return navigation.navigate("Article")
    };

    var data=[];

    useFocusEffect(useCallback(() => {

        (async () => {
            try {
                const fetched = await AsyncStorage.getItem('data')
                if(fetched !== null) {
                    data = JSON.parse(fetched)
                    //setData(JSON.parse(fetched))
                    console.log('main')
                    console.log(data)
                }
            }
            catch(err) {
                console.log('Error! Not able to read data in main.', err)
            }
        })()

    }, []))

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