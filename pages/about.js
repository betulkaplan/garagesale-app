import { useUser } from '../firebase/useUser';

const About = () => {
  const { user, logout } = useUser();
  return (
    <div>
      About page
      {user ? <p>User here</p> : <p>No user</p>}
    </div>
  );
};

export default About;
