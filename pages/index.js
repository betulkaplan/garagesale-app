import Head from 'next/head';
import WriteToCloudFirestore from '../components/cloudFirestore/Write';
import ReadFromCloudFirestore from '../components/cloudFirestore/Read';
import initFirebase from '../firebase/useUser';
import { useUser } from '../firebase/useUser';

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
          <a href="/auth">Log In!</a>
        </p>
        <Head>
          <title>Garage Sale</title>
        </Head>
        <h1>Welcome to garage sale</h1>
      </div>
    );
}
