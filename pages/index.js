import Head from 'next/head';
import firebase from '../firebase/initFirebase';
import WriteToCloudFirestore from '../components/cloudFirestore/Write';
import ReadFromCloudFirestore from '../components/cloudFirestore/Read';

firebase();

export default function Home() {
  return (
    <div>
      <WriteToCloudFirestore />
      <ReadFromCloudFirestore />
      <Head>
        <title>Garage Sale</title>
      </Head>
      <h1>Welcome to garage sale</h1>
    </div>
  );
}
