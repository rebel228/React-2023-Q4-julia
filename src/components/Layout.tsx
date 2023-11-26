import Head from 'next/head';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Details from './Details';

const Layout = ({ children }: { children: ReactElement }) => {
  const { query } = useRouter();
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
        {query.id ? <Details /> : null}
      </div>
    </>
  );
};

export default Layout;
