import React from 'react';
import { Store } from './store/store';

export const Context = React.createContext(null);

export const StoreProvider = ({children}) => {
  const store = Store();
  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  )  
}

export const useStore = () => React.useContext(Context);