import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <footer className="footer-cc border-top py-4">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-12 col-lg-6 text-center text-lg-start">
                            <span className="text-primary opacity-50">&copy; Computer Club 2021 | Check the  
                                <Link href="#">
                                    <a> attribute /
                                    license list</a>
                                </Link>
                            </span>
                        </div>
                        <div className="col-12 col-lg-6 text-center text-lg-end">
                            <Link href="#">
                                <a className="sosmed"><span><i className="fab fa-facebook-f"></i></span></a>
                            </Link>
                            <Link href="#">
                                <a className="sosmed"><span><i className="fab fa-instagram"></i></span></a>
                            </Link>
                            <Link href="#">
                                <a className="sosmed"><span><i className="fab fa-twitter"></i></span></a>
                            </Link>
                            <Link href="#">
                                <a className="sosmed"><span><i className="fab fa-linkedin-in"></i></span></a>
                            </Link>
                            <Link href="#">
                                <a className="sosmed"><span><i className="fab fa-github-alt"></i></span></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}