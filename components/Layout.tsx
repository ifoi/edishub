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
    <ApolloProvider client={client}>
        <AppProvider>
        <div>
          <Head>
            <title>Edis Hub- your source for tech resources</title>
          </Head>
          <Header />
          {props.children}
          {/* <Footer /> */}
        </div>
    </AppProvider>
      </ApolloProvider>
  );
};

export default Layout;
