import React, {createContext, useState, useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage';

export const Context = createContext();

export default function ContextProvider(props) {

    const [data, setData] = useState([{id:'0', title:'ReadMe', text:'Pull to write new article.\nArticles are autosaved.\nEnjoy!'}])
    const [selected, select] = useState("0");
    const [editing, edit] = useState(false);
    const [loggedIn, logIn] = useState(false);
    const [cred, setCred] = useState({firstTime: true, name: '', key: ''})

    useEffect(() => {
        (async () => {
            try {
                var fetched = await AsyncStorage.getItem('cred')
                if(fetched !== null) {
                    setCred(JSON.parse(fetched))
                }
            }
            catch(err) {
                console.log(err)
            }
        })()
    }, []);

    useEffect(() => {
        (async () => {
            try {
                var fetched = await AsyncStorage.getItem('data')
                if(fetched !== null) {
                    setData(JSON.parse(fetched))
                }
            }
            catch(err) {
                console.log(err)
            }
        })()
    }, []);

    useEffect(() => {
        (async () => {
            try {
                await AsyncStorage.setItem('data', JSON.stringify(data));
            }
            catch(e) {
                console.log("Error storing Data! ", e);
            }
        })()
    }, [data])

    useEffect(() => {
        (async () => {
            try {
                await AsyncStorage.setItem('cred', JSON.stringify(cred));
            }
            catch(e) {
                console.log("Error while storing Credentials! ", e);
            }
        })()
    }, [cred])

    return (
        <Context.Provider value={{data, setData, selected, select, editing, edit, loggedIn, logIn, cred, setCred}}>
            {props.children}
        </Context.Provider>
    )
}

  
