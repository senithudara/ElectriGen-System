import { createContext, useReducer } from 'react';

export const AccountsContext = createContext();

export const accountsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACCOUNTS':
      return {
        ...state,
        accounts: action.payload
      };
    case 'CREATE_ACCOUNT':
      return {
        ...state,
        accounts: [action.payload, ...state.accounts]
      };
    case 'UPDATE_ACCOUNT':
      return {
        ...state,
        accounts: state.accounts.map(account =>
          account._id === action.payload._id ? action.payload : account
        )
      };
    default:
      return state;
  }
};

export const AccountsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accountsReducer, {
    accounts: null
  });

  return (
    <AccountsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AccountsContext.Provider>
  );
};
