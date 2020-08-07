import React, {createContext, useState, useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage';

export const Context = createContext();

export default function ContextProvider(props) {

    const [data, setData] = useState([{id:'0', title:'ReadMe', text:'Pull to write new article.\nArticles are autosaved.\nEnjoy!'}])
    const [selected, select] = useState("0");

    useEffect(() => {
        (async () => {
            try {
                const fetched = await AsyncStorage.getItem('data')
                if(fetched !== null) {
                    console.log('Successfully Fetched data once!')
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
                console.log("Error! ", e);
            }
        })()
    }, [data])

    return (
        <Context.Provider value={{data, setData, selected, select}}>
            {props.children}
        </Context.Provider>
    )
}

  


