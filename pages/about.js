import { useUser } from '../firebase/useUser';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const About = () => {
  //const { user, logout } = useUser();
  const [user, logout] = useContext(UserContext);
  console.log('hakkındadan geleln', user);
  return (
    <div>
      About page
      {/* {user ? <p>User here</p> : <p>No user</p>} */}
    </div>
  );
};

export default About;
