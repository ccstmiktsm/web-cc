import Image from 'next/image'
import Header from './header'
import { Link } from "react-scroll"

export default function Navbar() {
    return (
        <>
            <Header />
            <header id="header-cc" className="header-cc pt-2 pt-lg-4">
                <nav className="navbar navbar-expand-lg navbar-light" data-aos="fade-down">
                    <div className="container">
                        <Link href="/">
                            <a className="navbar-brand text-dark">
                                <div className="d-inline-block align-text-center img-fluid me-2">
                                    <Image 
                                        src="/images/logo.svg"
                                        alt="logo computer club"
                                        width={35}
                                        height={35}                                        
                                    />
                                </div>
                                
                            </a>
                        </Link>
                        <span className ="fw-extra-bold mb-1">Computer Club</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link href="" className="nav-link header-link-cc active" to="hero-cc" smooth={true}>Berada</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="" className="nav-link header-link-cc" to="divisi-cc" smooth={true}>Divisi</Link>
                                </li>
                                <li className="nav-item">
                                <Link href="" className="nav-link header-link-cc" to="about-cc" smooth={true}>About</Link>
                                </li>
                                <li className="nav-item">
                                <Link href="" className="nav-link header-link-cc" to="gallery-cc" smooth={true}>Galeri</Link>
                                </li>
                                <li className="nav-item">
                                <Link href="" className="nav-link header-link-cc" to="testimonial-cc" smooth={true}>Kata Orang</Link>
                                </li>
                                <li className="nav-item">
                                <Link href="" className="nav-link header-link-cc" to="newsletter-cc" smooth={true}>Artikel</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}