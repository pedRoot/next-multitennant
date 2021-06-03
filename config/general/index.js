import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export const config = {
  apiURL: "https://jsonplaceholder.typicode.com/users/",
  tennantActive: publicRuntimeConfig.tennantActivate,
  applyRequestEncryption: publicRuntimeConfig.requestEncryption || "OFF",
  languageDefault: "es",
  keyAPI: serverRuntimeConfig.keyAPI,
  titleApplication: "General - Application",
  titleCompanyOwner: publicRuntimeConfig.titleCompanyOwner
};
