import { NextPage } from 'next/types';
import Navbar from '../components/common/Navbar';
import Layout from '../components/layout';
import BannerList from '../components/sections/Banner';

const HomePage: NextPage = () => {
  return (
    <>
      <Navbar />
      <Layout className="mt-20">
        <BannerList />
      </Layout>
    </>
  );
};

export default HomePage;
