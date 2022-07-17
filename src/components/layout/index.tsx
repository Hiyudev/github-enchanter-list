interface ILayoutProps {
  className?: string;
  children: React.ReactNode;
}

function Layout({ className, children }: ILayoutProps) {
  return (
    <main className={`px-5 sm:px-10 md:px-12 lg:px-24 xl:px-48 ${className}`}>
      {children}
    </main>
  );
}

export default Layout;
