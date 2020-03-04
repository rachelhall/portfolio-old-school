import App from "next/app";

import "../styles/app.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps}></Component>;
}

export default MyApp;
