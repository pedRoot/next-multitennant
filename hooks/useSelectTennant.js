import getConfig from "next/config";
import allConfigLoaded from "config";

const useSelectTennat = (tennant = null) => {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

  return {
    ...allConfigLoaded['general'],
    ...allConfigLoaded[ tennant || publicRuntimeConfig.tennantActivate ]
  }
};

export default useSelectTennat;