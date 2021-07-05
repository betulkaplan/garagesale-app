import Navbar from './Navbar';
import { UserContext } from '../contexts/UserContext';
import { useUser } from '../firebase/useUser';
import { AddProdProvider } from '../contexts/AddProductContext';

const Layout = ({ children }) => {
  const { user, logout } = useUser();
  console.log('LAYOUTTAN GELELN', user);
  return (
    <UserContext.Provider value={[user, logout]}>
      <AddProdProvider>
        <div>
          <main>
            <Navbar />
            {children}
          </main>
        </div>
      </AddProdProvider>
    </UserContext.Provider>
  );
};

export default Layout;
