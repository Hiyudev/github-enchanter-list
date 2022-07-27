import type { NextPage } from 'next';
import { GithubLogo } from 'phosphor-react';
import Navbar from '../../components/common/Navbar';
import Layout from '../../components/layout';
import SummaryCardsContainer from '../../components/list/SummaryCards';

const SummaryCardsPage: NextPage = () => {
  return (
    <>
      <Navbar />

      <Layout className="mt-20 space-y-8">
        <section className="space-y-2">
          <h1 className="text-2xl font-black uppercase tracking-wider sm:text-3xl md:text-4xl">
            Summary cards
          </h1>

          <p className="text-secondary mt-4 max-w-[300px]">
            A tool to generate your github summary card for profile README made
            by <span className="sr-only">@vn7n24fzkq</span>
            <a
              href="https://github.com/vn7n24fzkq"
              aria-label="Visit summary cards creator's github profile"
              target="_blank"
              rel="noreferrer"
              className="font-bold transition-colors hover:text-primary-500 focus:text-primary-500"
            >
              @vn7n24fzkq
            </a>
          </p>

          <a
            href="https://github.com/vn7n24fzkq/github-profile-summary-cards"
            target="_blank"
            className="inline-flex flex-row items-center justify-center gap-2 transition-colors hover:text-primary-500 focus:text-primary-500"
            rel="noreferrer"
            aria-label="Visit summary cards github repository"
          >
            <GithubLogo aria-hidden />
            <span>Project&apos;s github repository</span>
          </a>
        </section>

        <SummaryCardsContainer />
      </Layout>
    </>
  );
};

export default SummaryCardsPage;
