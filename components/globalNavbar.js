import Image from 'next/image'
import Header from './header'
import Link from 'next/link'

export default function Nav() {
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
                                    <Link href="/">
                                        <a className="nav-link header-link-cc">Beranda</a>
                                    </Link>                                    
                                </li>

                                <li className="nav-item">
                                    <Link href="/divisi">
                                        <a className="nav-link header-link-cc">Divisi</a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/about">
                                        <a className="nav-link header-link-cc">About</a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/galeri">
                                        <a className="nav-link header-link-cc">Galeri</a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/testimonial">
                                        <a className="nav-link header-link-cc">Kata Orang</a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/posts">
                                        <a className="nav-link header-link-cc">Article</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}