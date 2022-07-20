import type { NextPage } from 'next';
import { MagnifyingGlass } from 'phosphor-react';
import { FormEvent } from 'react';
import { Input } from '../../components/common/Input';
import Navbar from '../../components/common/Navbar';
import Layout from '../../components/layout';
import BadgeList from '../../components/sections/BadgeList';

const BadgesPage: NextPage = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

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

        <form onSubmit={handleSubmit}>
          <Input
            icon={<MagnifyingGlass weight="bold" />}
            placeholder="Search..."
          />
        </form>

        <BadgeList />
      </Layout>
    </>
  );
};

export default BadgesPage;
