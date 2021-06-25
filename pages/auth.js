import FirebaseAuth from '../components/auth/FirebaseAuth';
import Link from 'next/link';

const Auth = () => {
  return (
    <div>
      <FirebaseAuth />
      <p>
        <Link href="/">Go Home </Link>
      </p>
    </div>
  );
};

export default Auth;
