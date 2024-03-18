import { createContext, useReducer, useState } from "react";


export const AccountContext= createContext()

export const accountsReducer=(state,action)=>{

    switch(action.type){
        case 'SET_ACCOUNTS':
            return {
                accounts:action.payload
            }
        case 'CREATE_ACCOUNT':
            return {
                accounts:[action.payload,...state.accounts]
            }

        default:
            return state
    }

}

export const AccountContextProvider=({children})=>{

const [state,dispatch]=    useReducer(accountsReducer,{
    accounts:null
})

    return (
        <AccountContext.Provider value={{...state,dispatch}}>
            {children}
        </AccountContext.Provider>
    )
}