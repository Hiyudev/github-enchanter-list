import { NextPage } from 'next/types';
import Navbar from '../components/common/Navbar';
import Layout from '../components/layout';
import CatalogSection from '../components/sections/Catalog';

const HomePage: NextPage = () => {
  return (
    <>
      <Navbar />
      <Layout className="mt-20">
        <CatalogSection />
      </Layout>
    </>
  );
};

export default HomePage;
