import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>About</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  )
}