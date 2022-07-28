import { NextPage } from 'next/types';
import Navbar from '../components/common/Navbar';
import Layout from '../components/layout';
import CatalogSection from '../components/sections/Catalog';

const HomePage: NextPage = () => {
  return (
    <>
      <Navbar />
      <Layout className="mt-20 mb-20 space-y-8">
        <section className="space-y-2">
          <h1 className="text-2xl font-black uppercase tracking-wider sm:text-3xl md:text-4xl">
            Github enchanter list
          </h1>
          <p className="text-secondary mt-4 max-w-[400px]">
            List of cool static and dynamic badges for your README made by{' '}
            <span className="sr-only">Kevin</span>
            <a
              href="https://github.com/Hiyudev"
              aria-label="Visit github enchanter list creator's github profile"
              target="_blank"
              rel="noreferrer"
              className="font-bold transition-colors hover:text-primary-500 focus:text-primary-500"
            >
              @Kevin
            </a>
          </p>
          <p className="text-secondary mt-4 max-w-[400px]">
            All credits from each project I listed in this project its on each
            list page.
          </p>
        </section>

        <CatalogSection />
      </Layout>
    </>
  );
};

export default HomePage;
