import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'

export default function Home() {
  return (
    <div className="scrollbar-hide bg-gray-50npm install tailwind-scrollbar-hide h-screen overflow-y-scroll">
      <Head>
        <title>Margatni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />
    </div>
  )
}
