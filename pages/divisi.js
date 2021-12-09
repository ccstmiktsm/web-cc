import Layout from "../components/Layout"
import Head from "next/head"
import Image from 'next/image'

export default function Divisi() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Divisi Computer CLub</title>
                </Head>

                <section id="divisi-cc" className="divisi-cc">
                    <div className="container">
                        <div className="row title-section text-center">
                            <div className="col-12 mt-5">
                                <p className="text-capitalize" data-aos="fade-up">divisi kami</p>
                                <h3 className="text-capitalize" data-aos="fade-up" data-aos-delay="100">ada tiga divisi keren di UKM
                                    <br /> Computer Club
                                </h3>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-12 col-lg-4">
                                <div className="card card-shadow-cc" data-aos="fade-up" data-aos-delay="200">
                                    <div className="card-body">
                                        <Image
                                            className="divisi-illustration"
                                            src="/images/divisi/ba.svg"
                                            alt="Business Analyst"
                                            width={90}
                                            height={90}
                                        />
                                        <h5 className="card-title">Business Analyst</h5>
                                        <p className="card-text">Mencari ide serta menentukan target untuk pertumbuhan
                                            bisnis yang sedang dan akan dikembangkan.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card card-shadow-cc" data-aos="fade-up" data-aos-delay="300">
                                    <div className="card-body">
                                        <Image
                                            className="divisi-illustration"
                                            src="/images/divisi/pd.svg"
                                            alt="Product Designer"
                                            width={90}
                                            height={90}
                                        />
                                        <h5 className="card-title">Product Design</h5>
                                        <p className="card-text">Bertanggung jawab di bagian pengalaman pengguna pada suatu tampilan
                                            atau
                                            interface.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card card-shadow-cc" data-aos="fade-up" data-aos-delay="400">
                                    <div className="card-body">
                                        <Image
                                            className="divisi-illustration"
                                            src="/images/divisi/se.svg"
                                            alt="Software Engineer"
                                            width={90}
                                            height={90}
                                        />
                                        <h5 className="card-title">Software Engineer</h5>
                                        <p className="card-text">Merealisasikan ide dan interface yang telah dibangun oleh
                                            divisi Business Analyst dan Product Design.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}