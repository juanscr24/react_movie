import { Link } from 'react-router-dom'
import type { INavbarArray } from './INavbar'
import netflixLogo from '../../assets/imgs/Netflix.svg'

export const NAVBAR: INavbarArray[] = [
    { to: 'movies', name: 'Movies' },
    { to: 'series', name: 'Series' },
]

export const Navbar = () => {
    return (
        <nav className='p-7 bg-gray-900 flex justify-around gap-5 text-white items-center'>
            <Link
                to={'/'}
            >
                <img src={netflixLogo} alt="Netflix" width={90} />
            </Link>
            <div className='flex gap-10'>
                {NAVBAR.map((item, index) => (
                    <Link
                        className='text-white font-bold hover:text-gray-600'
                        key={index}
                        to={item.to}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    )
}
