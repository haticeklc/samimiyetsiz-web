import Link from "next/link";
import Layout from "../src/components/layout";
import Head from "next/head";
import React from "react";

export default function Home() {
  return <Layout>
      <Head>
          <title>Home</title>
      </Head>
      <h1>Home</h1>
    <Link href="/about"><a>About</a></Link>
  </Layout>
}

