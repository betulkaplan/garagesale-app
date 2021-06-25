import Navbar from './Navbar';
import { UserContext } from '../contexts/UserContext';
import { useUser } from '../firebase/useUser';

const Layout = ({ children }) => {
  const { user, logout } = useUser();
  console.log('LAYOUTTAN GELELN', user);
  return (
    <UserContext.Provider value={[user, logout]}>
      <div>
        <main>
          <Navbar />
          {children}
        </main>
      </div>
    </UserContext.Provider>
  );
};

export default Layout;
