import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/side-banner.png";
import sliderBg from "../../assets/slider-2-C6otvkOs.jpg";
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import Container from "../../components/Container";
import { FaShare } from "react-icons/fa";

const Banner = () => {
   return (
      <div>
         <Carousel>
            {/* Slider One */}
            <div className="bg-[#eaf4f1] py-24">
               <Container>
                  <section>
                     <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/2 text-start">
                           <h4 className="text-primary text-4xl font-bold mb-5">
                              Great Job Here
                           </h4>

                           <h1 className="text-6xl md:text-5xl font-bold text-gray-800 leading-tight mt-2">
                              Discover & Find Your <br />
                              Dream Companies
                           </h1>

                           {/* Search Bar */}
                           <div className="my-9 w-full max-w-xl">
                              <div className="flex items-center bg-white rounded-xl shadow-md overflow-hidden border-8 border-[#BDE4D4] py-3">
                                 <span className="px-4 text-gray-400 text-lg">
                                    <FaSearch />
                                 </span>
                                 <input
                                    type="text"
                                    placeholder="Skills, Designations, Keyword"
                                    className="flex-grow py-3 px-2 focus:outline-none text-sm"
                                 />

                                 <button className="bg-primary hover:bg-secondary text-white font-semibold px-7 py-4 text-sm rounded-md cursor-pointer duration-500 mr-3">
                                    Find Job
                                 </button>
                              </div>
                           </div>

                           {/* Review Section */}
                           <div className="text-sm text-gray-600">
                              <div className="flex items-center gap-6">
                                 <p className="text-secondary font-semibold">
                                    14k reviews on
                                 </p>

                                 <div className="flex text-yellow-500 text-base">
                                    {[...Array(5)].map((_, i) => (
                                       <FaStar key={i} />
                                    ))}
                                 </div>
                              </div>

                              <div className="flex items-center gap-3 mt-3">
                                 {/* Rating Number */}
                                 <div className="flex items-center text-secondary font-bold text-lg">
                                    <FaShare className="mr-2 text-lg text-[#03D574]" />{" "}
                                    4.9
                                 </div>

                                 {/* Avatars */}
                                 <div className="flex -space-x-3">
                                    {["1", "8", "4", "5"].map((id) => (
                                       <div key={id} className="avatar">
                                          <div className="w-10 rounded-full border-2 border-white">
                                             <img
                                                src={`https://i.pravatar.cc/150?img=${id}`}
                                                alt="user"
                                             />
                                          </div>
                                       </div>
                                    ))}

                                    <div className="w-10 h-10 flex items-center justify-center bg-[#E7F4FF] text-secondary font-semibold text-xs rounded-full border-2 border-white">
                                       12k
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Right Image */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                           <img
                              src={img1}
                              alt="Person working"
                              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg"
                           />
                        </div>
                     </div>
                  </section>
               </Container>
            </div>

            {/* Slider Two */}
            <div
               className="bg-[url(../../assets/slider-2-C6otvkOs.jpg)] py-24 bg-center"
               style={{ backgroundImage: `url(${sliderBg})` }}
            >
               <Container>
                  <section>
                     <div className="max-w-7xl mx-auto">
                        <div className="w-full lg:w-1/2 text-start">
                           <h4 className="text-primary text-4xl font-bold mb-5">
                              Find
                           </h4>

                           <h1 className="text-6xl md:text-5xl font-bold text-gray-800 leading-tight mt-2">
                              Great Job Opportunity You Deserve
                           </h1>

                           {/* Search Bar */}
                           <div className="my-9 w-full max-w-xl">
                              <div className="flex items-center bg-white rounded-md shadow-md overflow-hidden py-4">
                                 <span className="px-4 text-gray-400 text-lg">
                                    <SlLocationPin />
                                 </span>
                                 <input
                                    type="text"
                                    placeholder="Skills, Designations, Keyword"
                                    className="flex-grow py-3 px-2 focus:outline-none text-sm"
                                 />

                                 <button className="bg-primary hover:bg-secondary text-white font-semibold px-7 py-4 text-sm rounded-md cursor-pointer duration-500 mr-3">
                                    Search Job
                                 </button>
                              </div>
                           </div>

                           {/* Review Section */}
                           <div className="text-sm text-gray-600">
                              <div className="flex items-center gap-6">
                                 <p className="text-secondary font-semibold">
                                    14k reviews on
                                 </p>

                                 <div className="flex text-yellow-500 text-base">
                                    {[...Array(5)].map((_, i) => (
                                       <FaStar key={i} />
                                    ))}
                                 </div>
                              </div>

                              <div className="flex items-center gap-3 mt-3">
                                 {/* Rating Number */}
                                 <div className="flex items-center text-secondary font-bold text-lg">
                                    <FaShare className="mr-2 text-lg text-[#03D574]" />{" "}
                                    4.9
                                 </div>

                                 {/* Avatars */}
                                 <div className="flex -space-x-3">
                                    {["1", "8", "4", "5"].map((id) => (
                                       <div key={id} className="avatar">
                                          <div className="w-10 rounded-full border-2 border-white">
                                             <img
                                                src={`https://i.pravatar.cc/150?img=${id}`}
                                                alt="user"
                                             />
                                          </div>
                                       </div>
                                    ))}

                                    <div className="w-10 h-10 flex items-center justify-center bg-[#E7F4FF] text-secondary font-semibold text-xs rounded-full border-2 border-white">
                                       12k
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </section>
               </Container>
            </div>
         </Carousel>
      </div>
   );
};

export default Banner;
