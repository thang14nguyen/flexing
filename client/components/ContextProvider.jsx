/* eslint-disable react/prop-types */
import React, {
  useState, createContext, useContext, useMemo,
} from 'react';

export const Context = createContext({
  context: null,
  setContext: (context) => {},
});

export function ContextProvider({ children }) {
  const [context, setContext] = useState('');

  const contextValues = useMemo(() => ({ context, setContext }), []);
  return (
    <Context.Provider value={contextValues}>
      {children}
    </Context.Provider>
  );
}

export const useContextProvider = () => useContext(Context);
