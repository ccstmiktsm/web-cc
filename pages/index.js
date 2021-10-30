import Layout from "../components/Layout"
import Head from "next/head"
import Link from "next/link"

export default function Home() {
    return(
        <>
            <Layout>
                <Head>
                    <title>Welcome to Computer CLub</title>
                </Head>
                <div className="container">
                    <h1 className="mt-3">Welcome to Computer Club</h1>
                </div>
            </Layout>
        </>
    )
}