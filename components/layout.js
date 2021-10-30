import Head from 'next/head'
import Navbar from './navbar'

export default function Layout({ children}) {
    return (
        <html>
            <body>
                <Navbar/>   
                <div>{children}</div>
            </body>
        </html>
    )
}