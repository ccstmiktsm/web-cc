import Navbar from './navbar'
import Nav from './globalNavbar'
import Footer from './footer'

export default function Layout({children, home}) {
    return (
        <html>
            <body>
                {home ? (
                    <>
                        <Navbar/>
                    </>
                ) : (
                    <>
                        <Nav/>
                    </>
                )}     
                <div>{children}</div>
                <Footer/>
            </body>
        </html>
    )
}