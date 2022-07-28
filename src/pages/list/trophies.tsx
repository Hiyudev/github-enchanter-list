import type { NextPage } from 'next';
import { GithubLogo } from 'phosphor-react';
import Footer from '../../components/common/Footer';
import Navbar from '../../components/common/Navbar';
import Layout from '../../components/layout';
import TrophiesContainer from '../../components/list/Trophies';

const TrophiesPage: NextPage = () => {
  return (
    <>
      <Navbar />

      <Layout className="mt-20 space-y-8">
        <section className="space-y-2">
          <h1 className="text-2xl font-black uppercase tracking-wider sm:text-3xl md:text-4xl">
            Trophies
          </h1>

          <p className="text-secondary mt-4 max-w-[400px]">
            Dynamically generated GitHub Stat Trophies on your readme made by{' '}
            <span className="sr-only">@ryo-ma</span>
            <a
              href="https://github.com/ryo-ma"
              aria-label="Visit trophies creator's github profile"
              target="_blank"
              rel="noreferrer"
              className="font-bold transition-colors hover:text-primary-500 focus:text-primary-500"
            >
              @ryo-ma
            </a>
          </p>

          <a
            href="https://github.com/ryo-ma/github-profile-trophy"
            target="_blank"
            className="inline-flex flex-row items-center justify-center gap-2 transition-colors hover:text-primary-500 focus:text-primary-500"
            rel="noreferrer"
            aria-label="Visit trophies github repository"
          >
            <GithubLogo aria-hidden />
            <span>
              <code>github-profile-trophy</code> repository
            </span>
          </a>
        </section>

        <TrophiesContainer />
      </Layout>

      <Footer />
    </>
  );
};

export default TrophiesPage;
