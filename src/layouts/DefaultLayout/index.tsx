import Header from '~/components/Header';

interface IDefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout({ children = <></> }: IDefaultLayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default DefaultLayout;
