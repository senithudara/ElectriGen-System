import { AccountContext } from "../context/AccountContext";
import { useContext} from 'react'


export const useAccountsContext=()=>{
    const context= useContext(AccountContext)

    if(!context){
        throw Error('useAccountsContext must be used inside an AccountsContextProvider')
    }

    return context
}