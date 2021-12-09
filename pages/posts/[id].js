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

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <section id="article-cc" className="article-cc bg-light">
                <div className="container">
                    <div className="p-3 mb-3 rounded col-md-8 offset-md-2 p-3">
                        <h1 className="fw-bold text-capitalize" data-aos="fade-up" data-aos-delay="200">
                            {postData.title}
                        </h1>

                        <span className="font-weight-light">
                            <i className="date-posted"><Date dateString={postData.date} /> </i>
                            <i className="author-text">- Oleh {postData.author} </i>
                        </span> <br />

                        <p className="text-primary mt-2" data-aos="fade-up" data-aos-delay="300" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

// export async function getStaticPaths() {
//     // mengembalikan list dari value
//     // yang memungkinkan untuk id
// }

export async function getStaticProps({ params }) {
    // Mengambil data yang dibutuhkan untuk
    // blog post menggunakan params.id
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}