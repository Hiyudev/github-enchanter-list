import { NextPage } from 'next/types';
import Navbar from '../components/common/Navbar';
import Layout from '../components/layout';
import BadgeList from '../components/sections/BadgeList';

const HomePage: NextPage = () => {
  return (
    <>
      <Navbar />
      <Layout className="mt-20">
        <BadgeList />
      </Layout>
    </>
  );
};

export default HomePage;
