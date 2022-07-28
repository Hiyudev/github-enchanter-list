import type { NextPage } from 'next';
import { GithubLogo } from 'phosphor-react';
import Footer from '../../components/common/Footer';
import Navbar from '../../components/common/Navbar';
import Layout from '../../components/layout';
import StreakContainer from '../../components/list/Streak';

const StreakCardsPage: NextPage = () => {
  return (
    <>
      <Navbar />

      <Layout className="mt-20 space-y-8">
        <section className="space-y-2">
          <h1 className="text-2xl font-black uppercase tracking-wider sm:text-3xl md:text-4xl">
            Streak cards
          </h1>

          <p className="text-secondary mt-4 max-w-[400px]">
            Display your total contributions, current streak, and longest streak
            on your GitHub profile README made by{' '}
            <span className="sr-only">@DenverCoder1</span>
            <a
              href="https://github.com/DenverCoder1"
              aria-label="Visit streak cards creator's github profile"
              target="_blank"
              rel="noreferrer"
              className="font-bold transition-colors hover:text-primary-500 focus:text-primary-500"
            >
              @Jonah Lawrence
            </a>
          </p>

          <a
            href="https://github.com/DenverCoder1/github-readme-streak-stats"
            target="_blank"
            className="inline-flex flex-row items-center justify-center gap-2 transition-colors hover:text-primary-500 focus:text-primary-500"
            rel="noreferrer"
            aria-label="Visit streak cards github repository"
          >
            <GithubLogo aria-hidden />
            <span>
              <code>github-readme-streak-stats</code> github repository
            </span>
          </a>
        </section>

        <StreakContainer />
      </Layout>

      <Footer/>
    </>
  );
};

export default StreakCardsPage;
