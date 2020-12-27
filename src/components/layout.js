import Header from "./header";
import Head from "next/head";

export default function Layout({children}) {
    return <div className ="container mx-auto">
        <Head>
            <link rel="icon" href="/favicon.ico"/>
            <meta name="description" content="samimiyetsiz | ünsüzler için sosyal medya"/>
        </Head>
        <Header />
        <main className="mt-2">
            {children}
        </main>
        <footer className="mt-4 p-4 bg-gray-800 text whitespace-pre rounded-b-lg">
            this is footer
        </footer>

    </div>
}