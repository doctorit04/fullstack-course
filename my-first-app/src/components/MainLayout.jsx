import AppNavbar from './AppNavbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <AppNavbar />
      <div className="container" style={{ paddingTop: '20px' }}>
        {children}
      </div>
    </>
  );
};

export default MainLayout;
