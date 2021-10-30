import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Post({ allPostsData }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Artikel Computer Club</title>
        </Head>
        <div className="container">
          <h2 className="mt-3">Postingan Terbaru</h2>
            {allPostsData.map(({ id, date, title, description }) => (
              <div className="shadow-sm col-md-8 p-3 mb-5 bg-white rounded" key="id">
                <h4>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                </h4>
                <span className="font-weight-light">
                  <Date dateString={date}/>
                </span> <br/>
                <p className="mt-2">
                  {description}
                </p>
              </div>
            ))}
        </div>
      </Layout>
    </>
  )
}


