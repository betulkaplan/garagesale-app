import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <main>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
