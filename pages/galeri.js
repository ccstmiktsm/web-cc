import Layout from "../components/Layout"
import Head from "next/head"
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

export default function Galeri() {

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
            <Layout>
                <Head>
                    <title>Galeri Computer CLub</title>
                </Head>

                <section id="gallery-cc" className="gallery-cc">
                    <div className="container">
                        <div className="row title-section text-center">
                            <div className="col-12 mt-5">
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
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}