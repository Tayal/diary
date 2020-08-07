import React, {createContext, useState} from 'react'

export const Context = createContext();

export default function ContextProvider(props) {

    const [data, setData] = useState([{id:'0', title:'ReadMe', text:'Pull to write new article.\nArticles are autosaved.\nEnjoy!'}])
    const [selected, select] = useState("0");

    return (
        <Context.Provider value={{data, setData, selected, select}}>
            {props.children}
        </Context.Provider>
    )
}

  
  // (async () => {
  //     try {
  //         const fetched = await AsyncStorage.getItem('data')
  //         if(fetched !== null) {
  //             console.log('Successfully Fetched data on stack screen')
  //             data = JSON.parse(fetched)
  //             console.log(data)
  //         }
  //     }
  //     catch(err) {
  //         console.log(err)
  //     }
  // })()

