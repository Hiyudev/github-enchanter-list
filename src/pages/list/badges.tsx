import type { NextPage } from 'next';
import Navbar from '../../components/common/Navbar';
import Layout from '../../components/layout';
import BadgeContainer from '../../components/sections/Badge';

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </section>

        <BadgeContainer />
      </Layout>
    </>
  );
};

export default BadgesPage;
