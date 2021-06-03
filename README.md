This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started for proyect

First, run the development server:

```bash
git clone https://github.com/pedRoot/next-multitennant.git
cd next-multitennant
(rename env.local for **.env.local**)
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Mutitennan Management proposal

Configuration-based management:
1. **.env.local** File containing the application's secret variables.
  
2. **next.config.js** File containing the server variables (serverRuntimeConfig) and view variables (publicRuntimeConfig), the server variables must be assigned from the .env.local file.

3. The **config** directory contains per file, the configuration objects for each tennant

4. The **index.js** file of the **config** directory makes available a single object of the general configuration in addition to the current tennant settings.

5. Inside the **context** directory is defined the **configContext.js** file, in which is created the **ConfigContext** context where the tennant configuration is stored, **ConfigProvider** which is the provider of the context and the **useConfigContext** function to read the tennant configuration stored in the context.

## Select a tennant
1. Edit in the file **next.config.js** value tennantActivate of the object publicRuntimeConfig.
2. Restart application 
```bash
ctrl+c
yarn dev
```

## TODO for proposal
- Create a component to select the active tennant for the application.
- Merge form validations into a single file.
- Optimize the **fetchWrapper** helper.

