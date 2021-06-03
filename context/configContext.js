import { createContext, useContext, useState} from "react";

import config from "../config";

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [state, setstate] = useState(config);

  return (
    <ConfigContext.Provider value={state}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfigContext() {
  const context = useContext(ConfigContext);

  if(!context){
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useConfigContext;
