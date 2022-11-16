import Head from "next/head";
import { AppProvider } from "./context/AppContext";
import Header from "./Header";
// import Footer from "Footer";
import client from "./ApolloClient";
import Router from "next/router";
import NProgress from "nprogress";
import { ApolloProvider } from "@apollo/client";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Layout = (props) => {
  return (
    <AppProvider>
      <ApolloProvider client={client}>
        <div>
          <Head>
             <title>Edis Hub- your source for tech resources</title>
	          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	        <link rel="manifest" href="/site.webmanifest">
	        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" >
	        <meta name="msapplication-TileColor" content="#da532c">
	        <meta name="theme-color" content="#ffffff" />
          </Head>
          

          <Header />
          
          {props.children}
          {/* <Footer /> */}
        </div>
      </ApolloProvider>
    </AppProvider>
  );
};

export default Layout;
