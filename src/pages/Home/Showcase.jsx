import { FaCheck } from "react-icons/fa6";
import showcaseImg from "../../assets/showcase.png";
import airbnbLogo from "../../assets/l-7-C2IbzGL6.png";
import skypeLogo from "../../assets/l-10-BpvHgnZJ.png";
import fireLogo from "../../assets/l-4-Dl0Vv78N.png";
import Container from "../../components/Container";

const Showcase = () => {
   return (
      <Container>
         <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
               {/* Left Content */}
               <div className="w-full lg:w-1/2 text-start">
                  <span className="bg-green-100 text-primary font-medium px-4 py-2 rounded-md">
                     Our Showcase
                  </span>

                  <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-4 leading-14">
                     Best Job Search platform <br /> Experience for you
                  </h2>

                  <p className="text-gray-600 mt-4 mb-8 leading-8">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  {/* Features list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8 mb-8">
                     {[
                        "Corporate Business jobs",
                        "Company Showcase",
                        "Creative Services",
                        "Easy To Upload Resume",
                        "Online E-commerce",
                        "Hire Expert Candidates",
                     ].map((feature, idx) => (
                        <div
                           key={idx}
                           className="flex items-center gap-2 text-gray-700"
                        >
                           <FaCheck className="text-green-600" />
                           <span>{feature}</span>
                        </div>
                     ))}
                  </div>

                  {/* Button */}
                  <button className="bg-primary hover:bg-secondary text-white font-medium px-6 py-5 rounded-md transition duration-500">
                     Explore More Jobs
                  </button>
               </div>

               {/* Right Image with wavy mask */}
               <div className="relative w-full lg:w-1/2 flex justify-center">
                  <div className="relative w-11/12">
                     {/* Image masked */}
                     <div className="mask mask-squircle overflow-hidden">
                        <img
                           src={showcaseImg}
                           alt="Showcase"
                           className="w-full h-full object-cover"
                        />
                     </div>

                     {/* Floating logos */}
                     <div className="bg-white p-5 rounded-full absolute top-14 left-10 animate-bounce shadow-md">
                        <img
                           src={fireLogo}
                           alt="fire"
                           className="w-12 h-12 object-contain"
                        />
                     </div>

                     <div className="bg-white p-5 rounded-full absolute top-14 right-8 animate-bounce shadow-md">
                        <img
                           src={airbnbLogo}
                           alt="airbnb"
                           className="w-12 h-12 object-contain"
                        />
                     </div>

                     <div className="bg-white p-5 rounded-full absolute -bottom-8 left-5/12 animate-bounce shadow-md">
                        <img
                           src={skypeLogo}
                           alt="skype"
                           className="w-12 h-12 object-contain"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </Container>
   );
};

export default Showcase;
