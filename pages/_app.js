import Head from "next/head";

import { Nav } from "../components";

import { ConfigProvider } from "../context/configContext";
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>CRUD Example by React Hook Form and Axios</title>
        <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
      </Head>

      <div className="app-container bg-light">
        <Nav />
        <div className="container pt-4 pb-4">
          <ConfigProvider>
            <Component {...pageProps} />
          </ConfigProvider>
        </div>
      </div>
    </>
  );
};

export default MyApp;
