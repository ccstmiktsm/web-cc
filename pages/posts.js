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
      <Layout post>
        <Head>
          <title>Artikel Computer Club</title>
          <link rel="icon" type="image/svg+xml" href="/images/logo.svg" />
        </Head>

        <section id="article-cc" className="article-cc bg-light">
          <div className="container">

            {allPostsData.map(({ id, date, title, description, author, thumbnail }) => (
              <div className="shadow-sm p-3 mb-3 rounded col-md-8 offset-md-2 p-3 box-article" key="id">
                <div className="row">
                  <div className="col-md-6">
                    <Image
                      className="d-flex"
                      src={thumbnail}
                      width={350}
                      height={240}
                    />
                  </div>

                  <div className="col-md-6">
                    <h3 className="fw-bold text-capitalize" data-aos="fade-up" data-aos-delay="200">
                      <Link href={`/posts/${id}`}>
                        <a className="text-decoration-none">{title}</a>
                      </Link>
                    </h3>

                    <span className="font-weight-light">
                      <i className="date-posted"><Date dateString={date} /> </i>
                      <i className="author-text">- Oleh {author} </i>
                    </span> <br />

                    <p className="text-secondary mt-2" data-aos="fade-up" data-aos-delay="300">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </section>
      </Layout>
    </>
  )
}


