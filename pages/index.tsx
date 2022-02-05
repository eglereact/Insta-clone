import Head from 'next/head';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Modal from '../components/Modal';

export default function Home() {
  return (
    <div className="bg-gray-50npm install tailwind-scrollbar-hide h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Margatni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />
      <Modal />
    </div>
  );
}
