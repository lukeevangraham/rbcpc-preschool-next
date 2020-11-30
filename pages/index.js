import Head from 'next/head'
import Layout from "../hoc/Layout/Layout"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Asap:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>

      <Layout home>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
        <div>testing</div>
      </Layout>
    </div>
  )
}
