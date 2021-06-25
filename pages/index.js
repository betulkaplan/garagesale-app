import Head from 'next/head';
import WriteToCloudFirestore from '../components/cloudFirestore/Write';
import ReadFromCloudFirestore from '../components/cloudFirestore/Read';
import initFirebase from '../firebase/useUser';
import { useUser } from '../firebase/useUser';
import Link from 'next/link';

export default function Home() {
  const { user, logout } = useUser();

  if (user) {
    return (
      <>
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
        {user.profilePic ? (
          <image src={user.profilePic} height={5} width={50}></image>
        ) : (
          <p>No profile Picture</p>
        )}
        <WriteToCloudFirestore />
        <ReadFromCloudFirestore />
        <button onClick={() => logout()}>Log Out</button>
      </>
    );
  } else
    return (
      <div>
        <p>
          <Link href="/auth">Log In!</Link>
        </p>
        <Head>
          <title>Garage Sale</title>
        </Head>
        <h1>Welcome to garage sale</h1>
      </div>
    );
}
