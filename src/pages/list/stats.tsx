import type { NextPage } from 'next';
import { GithubLogo } from 'phosphor-react';
import Navbar from '../../components/common/Navbar';
import Layout from '../../components/layout';
import StatsContainer from '../../components/list/Stats';

const StatsPage: NextPage = () => {
  return (
    <>
      <Navbar />

      <Layout className="mt-20 space-y-8">
        <section className="space-y-2">
          <h1 className="text-2xl font-black uppercase tracking-wider sm:text-3xl md:text-4xl">
            Stats
          </h1>
          <p className="text-secondary mt-4 max-w-[400px]">
            Dynamically generated stats for your github readmes made by{' '}
            <span className="sr-only">Anurag Hazra</span>
            <a
              href="https://github.com/anuraghazra"
              aria-label="Visit github readme status creator's github profile"
              target="_blank"
              rel="noreferrer"
              className="font-bold transition-colors hover:text-primary-500 focus:text-primary-500"
            >
              @anuraghazra
            </a>
          </p>

          <ul>
            <li>
              <a
                href="https://github.com/anuraghazra/github-readme-stats"
                target="_blank"
                className="inline-flex flex-row items-center justify-center gap-2 transition-colors hover:text-primary-500 focus:text-primary-500"
                rel="noreferrer"
                aria-label="Visit github-readme-stats github repository"
              >
                <GithubLogo aria-hidden />
                <span>
                  <code>github-readme-stats</code> repository
                </span>
              </a>
            </li>
          </ul>
        </section>

        <StatsContainer />
      </Layout>
    </>
  );
};

export default StatsPage;
