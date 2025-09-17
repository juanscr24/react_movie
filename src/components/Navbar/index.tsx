import { Link } from 'react-router-dom'
import type { INavbarArray } from './INavbar'

export const NAVBAR: INavbarArray[] = [
    { to: '/', name: 'Home' },
    { to: 'movies', name: 'Movies' },
    { to: 'series', name: 'Series' },
]

export const Navbar = () => {
    return (
        <nav className='p-6 bg-amber-300 flex justify-center gap-5'>
            {NAVBAR.map((item, index) => (
                <Link
                    className='text-gray-900 font-bold hover:text-gray-600'
                    key={index}
                    to={item.to}>
                    {item.name}
                </Link>
            ))}
        </nav>
    )
}
