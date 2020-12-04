import Head from "next/head";
import Layout from "../hoc/Layout/Layout";
import HomeInfo from "../components/Home/HomeInfo/HomeInfo";
import HomePhotos from "../components/Home/HomePhotos/HomePhotos";
import HomeDetails from "../components/Home/HomeDetails/HomeDetails"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout home>
        <HomeInfo />
        <HomePhotos />
        <HomeDetails />
      </Layout>
    </div>
  );
}
