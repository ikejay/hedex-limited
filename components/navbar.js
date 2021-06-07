import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import 'tailwindcss/tailwind.css'
import {FaBars} from 'react-icons/fa'
import {motion} from 'framer-motion'

const mRotate = {
    rest: { rotate: 0 },
    hover: { rotate: 360, transition: { rotate: 360, duration: 2, repeat: Infinity } }
  };

const Navbar = () => {
    return ( 
        <nav class="pl-3 h-14 flex justify-between items-center md:w-full lg:w-full xl:w-full 2xl:w-full sm:w-full bg-gray-300 z-50 w-screen">
            <div class="flex items-center">
                <h1 class="font-bold">Hedex Limited</h1>
            </div>
            <div class="pr-3 hidden md:flex">
                <Link href='/'><a>Home</a></Link>
                <Link href='/about'><a>About</a></Link>
                <Link href='/services'><a>Services</a></Link>
                <Link href='/'><a>News</a></Link>
                <Link href='/about'><a>Projects</a></Link>
                <Link href='/services'><a>Contact Us</a></Link>
            </div>
            <motion.div class="md:hidden mr-3" variants={mRotate} whileHover="hover">
                <FaBars size={25} />
            </motion.div>
        </nav>
     );
}
 
export default Navbar;