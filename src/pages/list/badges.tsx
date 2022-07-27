import type { NextPage } from 'next';
import Navbar from '../../components/common/Navbar';
import Layout from '../../components/layout';
import BadgeContainer from '../../components/list/Badge';

const BadgesPage: NextPage = () => {
  return (
    <>
      <Navbar />

      <Layout className="mt-20 space-y-8">
        <section>
          <h1 className="text-2xl font-black uppercase tracking-wider sm:text-3xl md:text-4xl">
            Badges
          </h1>
          <p className="text-secondary mt-4 max-w-[300px]">
            Concise, consistent, and legible badges in SVG and raster format
            made by
            <span className="sr-only">Shields.io</span>
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
          </p>
        </section>

        <BadgeContainer />
      </Layout>
    </>
  );
};

export default BadgesPage;
