import Head from 'next/head'
import Layout from "../hoc/Layout/Layout"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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
