import Head from 'next/head';
import WriteToCloudFirestore from '../components/cloudFirestore/Write';
import ReadFromCloudFirestore from '../components/cloudFirestore/Read';
import initFirebase from '../firebase/useUser';
//import { useUser } from '../firebase/useUser';
import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function Home() {
  const [user, logout] = useContext(UserContext);
  console.log('Indexten gelen:', user);

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
      </>
    );
  } else
    return (
      <div>
        <Head>
          <title>Garage Sale</title>
        </Head>
        <h1>Welcome to garage sale</h1>
      </div>
    );
}
