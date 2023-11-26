import SearchResults from '@/src/components/SearchResults';
import type { ReactElement } from 'react';
import Layout from '@/src/components/Layout';
//import { GetServerSideProps } from 'next';

const SearchPage = () => {
  return <SearchResults />;
};

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   const page = query.page;

//   return {
//     props: { page },
//   };
// };

export default SearchPage;
