import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
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

        <section id="hero-cc" className="hero-cc bg-light">
          <div className="container">
            {allPostsData.map(({ id, date, title, description, author }) => (
              <div className="shadow-sm col-md-10 offset-md-1 p-5" key="id">
                <h1 className="fw-bold text-capitalize" data-aos="fade-up" data-aos-delay="200">
                  <Link href={`/posts/${id}`}>
                    <a className="text-decoration-none">{title}</a>
                  </Link>
                </h1>
                <span className="font-weight-light">
                  <Date dateString={date} />
                </span> <br />
                <p className="text-secondary mt-2" data-aos="fade-up" data-aos-delay="300">
                  {description}
                </p>
                <span className="font-weight-light fs-6">
                  <i>Oleh {author} </i>
                </span>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}


