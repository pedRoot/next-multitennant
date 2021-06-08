import { createContext, useContext, useState } from "react";
import useSelectTennant from "hooks/useSelectTennant";

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState(useSelectTennant());

  const handleChangeTennant = (tennant = null) => {
    setConfig(()=>{
      return useSelectTennant(tennant);
    });
  };

  return (
    <ConfigContext.Provider value={{config, handleChangeTennant}}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfigContext() {
  const context = useContext(ConfigContext);

  if (!context) {
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useConfigContext;
