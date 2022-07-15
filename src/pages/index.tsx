import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <main className="min-w-screen flex min-h-screen flex-col items-center justify-center bg-zinc-900 text-white">
        <h1 className="text-xl font-bold text-zinc-100">
          Welcome to the boilerplate
        </h1>
        <p className="text-sm text-zinc-300">Feel free to clone and use it.</p>
      </main>
    </>
  );
};

export default HomePage;
