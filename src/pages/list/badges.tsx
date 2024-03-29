import type { NextPage } from 'next';
import { GithubLogo } from 'phosphor-react';
import Footer from '../../components/common/Footer';
import Navbar from '../../components/common/Navbar';
import Layout from '../../components/layout';
import BadgeContainer from '../../components/list/Badge';

const BadgesPage: NextPage = () => {
  return (
    <>
      <Navbar />

      <Layout className="mt-20 space-y-8">
        <section className="space-y-2">
          <h1 className="text-2xl font-black uppercase tracking-wider sm:text-3xl md:text-4xl">
            Badges
          </h1>
          <p className="text-secondary mt-4 max-w-[400px]">
            Concise, consistent, and legible badges in SVG and raster format
            made by <span className="sr-only">Shields.io</span>
            <a
              href="https://github.com/badges"
              aria-label="Visit badge creator's github profile"
              target="_blank"
              rel="noreferrer"
              className="font-bold transition-colors hover:text-primary-500 focus:text-primary-500"
            >
              @Shields.io
            </a>
            {'\n'}
            with the help of
            <span className="sr-only">Simple icons</span>
            <a
              href="https://github.com/simple-icons"
              aria-label="Visit simple icons creator's github profile"
              target="_blank"
              rel="noreferrer"
              className="font-bold transition-colors hover:text-primary-500 focus:text-primary-500"
            >
              @SimpleIcons
            </a>
            <br />
            Also thanks to <span className="sr-only">Jonah Lawrence</span>
            <a
              href="https://github.com/DenverCoder1"
              aria-label="Visit custom icons badge creator's github profile"
              target="_blank"
              rel="noreferrer"
              className="font-bold transition-colors hover:text-primary-500 focus:text-primary-500"
            >
              @Jonah Lawrence
            </a>{' '}
            for making custom icons badge.
          </p>

          <ul>
            <li>
              <a
                href="https://github.com/badges/shields"
                target="_blank"
                className="inline-flex flex-row items-center justify-center gap-2 transition-colors hover:text-primary-500 focus:text-primary-500"
                rel="noreferrer"
                aria-label="Visit shields.io github repository"
              >
                <GithubLogo aria-hidden />
                <span>
                  <code>shields.io</code> repository
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/simple-icons/simple-icons"
                target="_blank"
                className="inline-flex flex-row items-center justify-center gap-2 transition-colors hover:text-primary-500 focus:text-primary-500"
                rel="noreferrer"
                aria-label="Visit simple icons github repository"
              >
                <GithubLogo aria-hidden />
                <span>
                  <code>simple-icons</code> repository
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/DenverCoder1/custom-icon-badges"
                target="_blank"
                className="inline-flex flex-row items-center justify-center gap-2 transition-colors hover:text-primary-500 focus:text-primary-500"
                rel="noreferrer"
                aria-label="Visit custom icon badges github repository"
              >
                <GithubLogo aria-hidden />
                <span>
                  <code>custom-icon-badges</code> repository
                </span>
              </a>
            </li>
          </ul>
        </section>

        <BadgeContainer />
      </Layout>

      <Footer />
    </>
  );
};

export default BadgesPage;
