import Link from 'next/link'
import Search from "./Search"
export default function Navbar() {
    return (
        <>
            <nav className='bg-blue-100 flex items-center'>
                <div>
                    <ul className='flex gap-6 mx-2 p-4'>
                        <li> <Link href="/">Home</Link></li>
                        <li> <Link href="/about">About</Link></li>
                        <li> <Link href="/users">Users</Link></li>
                    </ul>
                </div>
                <div>
                    <Search />
                </div>
            </nav></>
    )
}
