import { GetStaticProps, NextPage } from 'next/types';
import Layout from '../components/layout';
import BannerList from '../components/sections/Banner';
import { getIcons } from '../lib/simpleIcons';
import { SimpleIcon } from '../types';

interface IHomePageProps {
  icons: SimpleIcon[];
}

const HomePage: NextPage = ({ icons }: IHomePageProps) => {
  return (
    <Layout>
      <BannerList icons={icons} />
    </Layout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (context) => {
  const icons = getIcons();

  return {
    props: {
      icons,
    },
  };
};
