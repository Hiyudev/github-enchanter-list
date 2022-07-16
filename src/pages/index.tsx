import { GetStaticProps, NextPage } from 'next/types';
import BannerList from '../components/sections/Banner';
import { getIcons } from '../lib/simpleIcons';
import { SimpleIcon } from '../types';

interface IHomePageProps {
  icons: SimpleIcon[];
}

const HomePage: NextPage = ({ icons }: IHomePageProps) => {
  return (
    <>
      <main className="min-w-screen flex min-h-screen flex-col items-center justify-center bg-zinc-900 text-white">
        <h1 className="text-xl font-bold text-zinc-100">
          Welcome to the boilerplate
        </h1>
        <p className="text-sm text-zinc-300">Feel free to clone and use it.</p>

        <BannerList icons={icons} />
      </main>
    </>
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
