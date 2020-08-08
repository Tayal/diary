import React, { useContext } from 'react'
import { Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Context } from '../ContextProvider'
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

export default function Read() {

    const {data, selected, edit} = useContext(Context);
    
    const navigation = useNavigation();
    navigation.setOptions({
        headerTitle: () => <Text style={styles.header} numberOfLines={1}> {data.filter(article => article.id==selected)[0].title} </Text>,
        headerRight: () => <Icon name='edit' type='feather'
                                iconStyle={styles.icon}
                                onPress={() => { edit(true);
                                    return navigation.navigate('Input') }} />
    })

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
    },
    header: {
        fontSize: 22,
        fontFamily: 'serif',
    },
    icon: {
        padding: 25,
    }
})