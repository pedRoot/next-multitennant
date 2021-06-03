module.exports = {
  serverRuntimeConfig: {
    keyAPI: process.env.KEY_API,
  },
  publicRuntimeConfig: {
    requestEncryption: process.env.APPLY_REQUEST_ENCRYPTION,
    tennantActivate: process.env.TENNANT || 'tnx',
    titleCompanyOwner: 'Novopayment',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    return config;
  }
}