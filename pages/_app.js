import App from "next/app";

import "../styles/app.scss";
import { Fragment } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps}></Component>;
    </Fragment>
  );
}

export default MyApp;
