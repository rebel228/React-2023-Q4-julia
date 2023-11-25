import Head from "next/head";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import { ReactElement } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Head>
        <title>Search App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="wrapper">
        <div className="container">
          <SearchBar />
          <main>{children}</main>
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Layout;
