import React, { useContext, useEffect } from 'react'
import { View, FlatList, StyleSheet, RefreshControl, Modal } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { Context } from '../ContextProvider'

export default function Main() {

    const {data, setData, select, loggedIn} = useContext(Context);

    const navigation = useNavigation();
    navigation.setOptions({
        headerTitleStyle: {textAlign: 'center', fontFamily: 'serif', fontSize: 25,}
    })
    
    const onRefresh = () => navigation.navigate("Input");

    render = ({item}) => (
        <ListItem
            title={item.title}
            leftIcon={<Icon name="code" />}
            bottomDivider
            chevron
            onPress={() => {
                select(item.id);
                return navigation.navigate("Reading")}}
            onLongPress={() => setData(data.filter(article => article.id != item.id))}
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
})