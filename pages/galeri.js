import Layout from "../components/Layout"
import Head from "next/head"

export default function Galeri() {
    return(
        <>
            <Layout>
                <Head>
                    <title>Galeri Computer CLub</title>
                </Head>
                <div className="container">
                    <h1 className="mt-3">Welcome to Computer Club</h1>
                </div>
            </Layout>
        </>
    )
}