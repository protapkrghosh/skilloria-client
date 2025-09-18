import Container from "./Container";
import { Link } from "react-router";
import logo from '../assets/skilloria.png'
import shape from "../assets/shape.svg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
   const companyLinks = [
      { name: "About us", href: "#" },
      { name: "Blogs", href: "#" },
      { name: "FAQ’s", href: "#" },
      { name: "Contact", href: "#" },
   ];

   const supportLinks = [
      { name: "Terms of use", href: "#" },
      { name: "Terms & conditions", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Cookie policy", href: "#" },
   ];

   const socialLinks = [
      { icon: <FaFacebook />, href: "https://www.facebook.com" },
      { icon: <FaTwitter />, href: "https://x.com/home" },
      { icon: <FaLinkedin />, href: "https://www.linkedin.com/feed" },
      { icon: <FaInstagram />, href: "https://www.instagram.com" },
   ];

   return (
      <Container>
         <footer className="bg-white text-base-300">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-7">
               {/* Logo */}
               <div>
                  <Link to={"/"} className="flex items-center gap-3">
                     <img src={logo} alt="Logo" className="w-14" />
                     <p className="text-2xl font-bold">Skilloria</p>
                  </Link>

                  <img src={shape} alt="Shape" className="mt-14"/>
               </div>

               {/* Company Section */}
               <div>
                  <h3 className="text-secondary font-semibold text-lg mb-4">
                     Company
                  </h3>
                  <ul className="space-y-3">
                     {companyLinks.map((link, index) => (
                        <li key={index} className="flex items-center gap-1">
                           <MdKeyboardDoubleArrowRight />
                           <a
                              href={link.href}
                              className="hover:ml-1 duration-300 text-[15px]"
                           >
                              {link.name}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Support Section */}
               <div>
                  <h3 className="text-secondary font-semibold text-lg mb-4">
                     Support
                  </h3>
                  <ul className="space-y-3">
                     {supportLinks.map((link, index) => (
                        <li key={index} className="flex items-center gap-1">
                           <MdKeyboardDoubleArrowRight />
                           <a
                              href={link.href}
                              className="hover:ml-1 duration-300 text-[15px]"
                           >
                              {link.name}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Newsletter */}
               <div>
                  <h3 className="text-secondary font-semibold text-lg mb-3">
                     Newsletter
                  </h3>
                  <p className="text-sm mb-3">
                     Join & get important new regularly
                  </p>
                  <div className="flex">
                     <input
                        type="email"
                        placeholder="Enter your email*"
                        className="input input-bordered w-full rounded-r-none focus-within:outline-0 focus:border-primary"
                     />

                     <input
                        type="submit"
                        value={"Send"}
                        className="btn bg-primary hover:bg-secondary duration-500 text-white rounded-l-none"
                     />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                     We only send interesting and relevant emails.
                  </p>
               </div>
            </div>

            {/* Social Media Section */}
            <div className="border-t border-gray-100 pt-7 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
               <div className="flex space-x-4 mb-3 md:mb-0">
                  <a href="#" className="hover:underline">
                     Privacy & Terms.
                  </a>
                  <a href="#" className="hover:underline">
                     Contact Us
                  </a>
               </div>
               <p>
                  Copyright © {new Date().getFullYear()} - All right reserved by
                  Skilloria Industries Ltd
               </p>

               <div className="flex space-x-4 mt-3 md:mt-0 text-xl">
                  {socialLinks.map((social, index) => (
                     <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        className="hover:text-primary duration-300 hover:scale-110"
                     >
                        {social.icon}
                     </a>
                  ))}
               </div>
            </div>
         </footer>
      </Container>
   );
};

export default Footer;
