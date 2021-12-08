import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({children}) {
    return (
        <html>
            <body>
                <Navbar/>   
                <div>{children}</div>
                <Footer/>
            </body>
        </html>
    )
}