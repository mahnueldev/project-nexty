import Link from 'next/link'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <h1>Hello World</h1>
      <Link href="/about">Link to about page</Link>
      <div>

      <Link href="/users">Link to User Page </Link>
      </div>
    </main>
  )
}
