import Navbar from "./navbar"
import Footer from "./footer"
import 'tailwindcss/tailwind.css'
import { FaFacebookF, FaLinkedin, FaWhatsapp, FaInstagram, FaTwitter, FaPhone } from 'react-icons/fa';
import {GoLocation} from 'react-icons/go'

const Layout = ({ children }) => {
    return (
        
        <div>
        <div class="w-full hidden h-12 bg-gray-600 content-center justify-center md:space-x-20">
            <div class="flex font-medium">
                <GoLocation size={20} color="white"/>
                <p class="pl-3">East Legon</p>
            </div>
            <div class="flex font-medium">
                <FaPhone size={20} color="white"/>
                <p class="pl-3">+233 246 590 233</p>
            </div>
            <div class="flex h-100 space-x-10">
                <FaFacebookF size={20} color="white" cursor="pointer"/>
                <FaInstagram size={20} color="white" cursor="pointer"/>
                <FaLinkedin size={20} color="white" cursor="pointer"/>
                <FaWhatsapp size={20} color="white" cursor="pointer"/>
                <FaTwitter size={20} color="white" cursor="pointer"/>
            </div>
            </div>
        <Navbar />
            {children}
        <Footer />
        </div>
     );
}
 
export default Layout;