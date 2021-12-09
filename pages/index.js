import Layout from "../components/Layout"
import Head from "next/head"
import Link from "next/link"
import Image from 'next/image'
import FsLightbox from "fslightbox-react"
import React, { useState } from 'react';

const imageSources = [
    '/images/galeri/1.jpg',
    '/images/galeri/7.jpg',
    '/images/galeri/8.jpg',
    '/images/galeri/16.jpg',
    '/images/galeri/17.jpg',
    '/images/galeri/18.jpg',
];

export default function Home() {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        sourceIndex: 0
    });

    const openLightboxOnSlide = (index) => () => {
        setLightboxController({
            toggler: !lightboxController.toggler,
            sourceIndex: index
        });
    }

    return (
        <>
            <Layout home>
                <Head>
                    <title>Home - Computer CLub STMIK Tasikmalayass</title>
                </Head>

                <section id="hero-cc" className="hero-cc bg-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-6 col-xl-5 order-2 order-lg-1 mt-5">
                                <h5 className="fw-bold text-capitalize text-primary" data-aos="fade-up" data-aos-delay="100">belajar
                                    menjadi seru</h5>
                                <h1 className="fw-bold text-capitalize mb-3 mb-lg-4" data-aos="fade-up" data-aos-delay="200">gabung
                                    bersama kami dan mulai membangun relasi</h1>
                                <p className="text-secondary" data-aos="fade-up" data-aos-delay="300">Jadilah mahasiswa yang berbeda
                                    dari biasanya! <br className="d-none d-lg-block" />Mari aktif
                                    berorganisasi dan berkontribusi kepada kampus dan juga masyarakat.</p>
                                <a href="#" className="btn btn-primary" data-aos="fade-up" data-aos-delay="400">Diskusi</a>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-7 text-center text-lg-end order-1 order-lg-2" data-aos="zoom-in">
                                <div className="d-none d-lg-inline-block img-fluid hero-illustration">
                                    <Image
                                        src="/images/roket.svg"
                                        alt="Business Analyst"
                                        width={596.14}
                                        height={409.48}
                                    />
                                </div>

                                <div className="d-inline-block d-lg-none img-fluid m-hero-illustration">
                                    <Image
                                        src="/images/roket-mobile.svg"
                                        alt="Business Analyst"
                                        width={596.14}
                                        height={409.48}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="divisi-cc" className="divisi-cc">
                    <div className="container">
                        <div className="row title-section text-center">
                            <div className="col-12">
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

                <section id="about-cc" className="about-cc">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-7 col-xl-7" data-aos="zoom-out-up">
                                <div className="d-none d-lg-block img-fluid">
                                    <Image
                                        src="/images/about.png"
                                        alt="Tentang kami"
                                        width={571.62}
                                        height={339}
                                    />
                                </div>

                                <div className="d-lg-none img-fluid mb-5">
                                    <Image
                                        src="/images/about-mobile.png"
                                        alt="Tentang kami"
                                        width={571.62}
                                        height={339}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-lg-5 col-xl-5 d-flex align-items-center">
                                <div className="row text-center text-lg-start">
                                    <div className="col-12">
                                        <div className="title-section">
                                            <p className="text-capitalize" data-aos="fade-up">tentang kami</p>
                                            <h3 className="text-capitalize mb-3 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
                                                berkenalan dengan <span className="d-lg-none">UKM</span> <br /> <span
                                                    className="d-none d-lg-inline">UKM</span>
                                                Computer Club</h3>
                                        </div>
                                        <p className="desc" data-aos="fade-up" data-aos-delay="200">
                                            Computer Club adalah salah satu UKM di Kampus STMIK Tasikmalaya yang berfokus
                                            mempelajari bisnis, design produk serta teknologi. Computer Club ialah organisasi tertua
                                            di STMIK Tasikmalaya yang berdiri pada tanggal 25 Desember 2001.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="gallery-cc" className="gallery-cc">
                    <div className="container">
                        <div className="row title-section text-center">
                            <div className="col-12">
                                <p className="text-capitalize" data-aos="fade-up">galeri kami</p>
                                <h3 className="text-capitalize" data-aos="fade-up" data-aos-delay="100">dokumentasi kegiatan UKM <br />
                                    Computer Club</h3>
                            </div>
                        </div>
                        <div className="row g-4">
                            {imageSources.map((source, index) => (

                                <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="200">
                                    <Image
                                        width="350"
                                        height="240"
                                        className="img-fluid rounded gallery-cc"
                                        alt="CCJouney"
                                        src={source}
                                        onClick={openLightboxOnSlide(index)}
                                        key={source}
                                    />
                                </div>
                            ))}
                            <FsLightbox
                                toggler={lightboxController.toggler}
                                sourceIndex={lightboxController.sourceIndex}
                                sources={imageSources}
                            />
                            {/* <div class="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="200">

                            </div> */}

                            {/* <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="200">
                                <Link href="/images/galeri/1.jpg">
                                    <a data-lightbox="gallery-cc" data-title="CCJouney">

                                        <Image
                                            className="img-fluid rounded"
                                            src="/images/galeri/1.jpg"
                                            alt="CCJourney"
                                            width={350}
                                            height={240}
                                        />

                                    </a>
                                </Link>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="300">
                                <Link href="/images/galeri/1.jpg">
                                    <a data-lightbox="gallery-cc" data-title="CCJouney">

                                        <Image
                                            className="img-fluid rounded"
                                            src="/images/galeri/7.jpg"
                                            alt="CCJourney"
                                            width={350}
                                            height={240}
                                        />

                                    </a>
                                </Link>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="400">
                                <Link href="/images/galeri/1.jpg">
                                    <a data-lightbox="gallery-cc" data-title="CCJouney">

                                        <Image
                                            className="img-fluid rounded"
                                            src="/images/galeri/8.jpg"
                                            alt="CCJourney"
                                            width={350}
                                            height={240}
                                        />

                                    </a>
                                </Link>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up">
                                <Link href="/images/galeri/1.jpg">
                                    <a data-lightbox="gallery-cc" data-title="CCJouney">

                                        <Image
                                            className="img-fluid rounded"
                                            src="/images/galeri/16.jpg"
                                            alt="CCJourney"
                                            width={350}
                                            height={240}
                                        />

                                    </a>
                                </Link>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="100">
                                <Link href="/images/galeri/1.jpg">
                                    <a data-lightbox="gallery-cc" data-title="CCJouney">

                                        <Image
                                            className="img-fluid rounded"
                                            src="/images/galeri/17.jpg"
                                            alt="CCJourney"
                                            width={350}
                                            height={240}
                                        />

                                    </a>
                                </Link>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="200">
                                <Link href="/images/galeri/1.jpg">
                                    <a data-lightbox="gallery-cc" data-title="CCJouney">

                                        <Image
                                            className="img-fluid rounded"
                                            src="/images/galeri/18.jpg"
                                            alt="CCJourney"
                                            width={350}
                                            height={240}
                                        />

                                    </a>
                                </Link>
                            </div> */}
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 text-center">
                                <a href="#" className="btn btn-outline-primary shadow-none" data-aos="fade-up">Lihat Semua</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="testimonial-cc" className="testimonial-cc">
                    <div className="container" data-aos="zoom-in">
                        <div className="row title-section text-center">
                            <div className="col-12">
                                <p className="text-capitalize">Pengalaman Mereka</p>
                                <h3 className="text-capitalize">apa yang CCPasif katakan?</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner text-center">
                                        <div className="carousel-item active">
                                            <div className="row justify-content-center">
                                                <div className="col-8">
                                                    <div className="">
                                                        <Image
                                                            className="img-fluid img-thumbnail rounded-circle mb-0"
                                                            src="/images/profil/1.jpg"
                                                            alt="arsalaudin"
                                                            width={90}
                                                            height={90}
                                                        />
                                                    </div>
                                                    <h4 className="text-white mb-3">Muhamad Arsaludin</h4>
                                                    <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
                                                        sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus
                                                        dolor purus non enim praesent elementum facilisis leo vel “</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row justify-content-center">
                                                <div className="col-8">
                                                    <div className="">
                                                        <Image
                                                            className="img-fluid img-thumbnail rounded-circle mb-0"
                                                            src="/images/profil/1.jpg"
                                                            alt="arsalaudin"
                                                            width={100}
                                                            height={100}
                                                        />
                                                    </div>
                                                    <h4 className="text-white mb-3">Muhamad Arsaludin</h4>
                                                    <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
                                                        sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus
                                                        dolor purus non enim praesent elementum facilisis leo vel “</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                                        data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                                        data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="newsletter-cc" className="newsletter-cc">
                    <div className="container">
                        <div className="row title-section text-center">
                            <div className="col-12">
                                <p className="text-capitalize" data-aos="fade-up">Kabar Kami</p>
                                <h3 className="text-capitalize" data-aos="fade-up" data-aos-delay="100">Info Terbaru UKM Computer Club
                                </h3>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-12 col-md-6 col-xl-4">
                                <div className="card card-article card-shadow-cc" data-aos="fade-up" data-aos-delay="200">
                                    <div className="card-img-top img-fluid rounded">
                                        <Image
                                            src="/images/berita/1.jpg"
                                            alt="CCPasif A zam zam bekerja di ruang guru"
                                            width={350}
                                            height={240}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-capitalize">CCPasif A zam zam bekerja di ruang guru</h5>
                                        <p className="card-text">Mencari ide serta menentukan target untuk pertumbuhan
                                            bisnis yang sedang dan akan dikembangkan.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                                <div className="card card-article card-shadow-cc" data-aos="fade-up" data-aos-delay="300">
                                    <div className="card-img-top img-fluid rounded">
                                        <Image
                                            src="/images/berita/2.jpg"
                                            alt="CCPasif A Arsaludin meraih nilai kerja praktek
                                        tertinggi"
                                            width={350}
                                            height={240}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-capitalize">CCPasif A Arsaludin meraih nilai kerja praktek
                                            tertinggi</h5>
                                        <p className="card-text">Mencari ide serta menentukan target untuk pertumbuhan
                                            bisnis yang sedang dan akan dikembangkan.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                                <div className="card card-article card-shadow-cc" data-aos="fade-up" data-aos-delay="400">
                                    <div className="card-img-top img-fluid rounded">
                                        <Image
                                            src="/images/berita/3.jpg"
                                            alt="CCPasif A Arsaludin meraih nilai kerja praktek
                                        tertinggi"
                                            width={350}
                                            height={240}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-capitalize">CCPasif Teh Dhini terobos kampus merdeka maga...</h5>
                                        <p className="card-text">Mencari ide serta menentukan target untuk pertumbuhan
                                            bisnis yang sedang dan akan dikembangkan.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 text-center">
                                <Link href="/posts/">
                                    <a className="btn btn-outline-primary shadow-none" data-aos="fade-up">Lihat Semua</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}