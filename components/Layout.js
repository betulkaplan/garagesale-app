import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <main>
        <Navbar />
        <h1>Hello</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
