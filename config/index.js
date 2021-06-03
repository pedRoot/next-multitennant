import getConfig from "next/config";

import { config as general } from "./general";
import { config as tnx } from "./tnx";
import { config as bdb } from "./bdb";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const allConfigLoaded = {
  general, tnx, bdb
};

export default { 
  ...allConfigLoaded["general"], 
  ...allConfigLoaded[publicRuntimeConfig.tennantActivate]
};