import Head from 'next/head'
import Navbar from '../components/navbar';
import Image from '../components/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bootstrap 5 CDN</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />        
      </Head>
      <main>
        <Navbar/>
        <Image/>
      </main>
    </div>
  )
}
