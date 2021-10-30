import Head from 'next/head'
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from '../../components/date';

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({postData}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div className="container">
                <div className="col-md-8">
                    <h2 className="mt-3">{postData.title}</h2>
                    <Date dateString={postData.date}/> <br/>
                    <div className="mt-4" dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
                </div>
            </div>

        </Layout>
    )
}

// export async function getStaticPaths() {
//     // mengembalikan list dari value
//     // yang memungkinkan untuk id
// }

export async function getStaticProps({params}) {
    // Mengambil data yang dibutuhkan untuk
    // blog post menggunakan params.id
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}