import { FaCheck } from "react-icons/fa";
import featureImg from "../../assets/features.png";
import featuresData from "../../../public/features.json";

const Features = () => {
   return (
      <section className="py-16">
         <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="relative w-full lg:w-1/2 flex justify-center">
               <div className="relative w-full max-w-md lg:max-w-lg">
                  {/* TOP-LEFT yellow dots (behind the image) */}
                  <div
                     className="pointer-events-none absolute -top-6 -left-6  w-24 h-24 z-0"
                     style={{
                        backgroundImage:
                           "radial-gradient(#FFA410 2.5px, rgba(0,0,0,0) 3px)",
                        backgroundSize: "12px 12px",
                        borderRadius: 6,
                        opacity: 0.95,
                     }}
                  />

                  {/* IMAGE with large arc-style border-radius */}
                  <div
                     className="relative z-10 overflow-hidden
                            rounded-tl-[18px] rounded-bl-[28px]
                            rounded-tr-[220px] lg:rounded-tr-[300px]
                            shadow-md"
                  >
                     <img
                        src={featureImg}
                        alt="People discussion"
                        className="w-full h-auto object-cover block"
                     />
                  </div>

                  {/* BOTTOM-RIGHT green dots */}
                  <div
                     className="pointer-events-none absolute -bottom-7 -right-9 w-24 h-24 z-0"
                     style={{
                        backgroundImage:
                           "radial-gradient(#198754 2.5px, rgba(0,0,0,0) 3px)",
                        backgroundSize: "12px 12px",
                        borderRadius: 6,
                        opacity: 0.95,
                     }}
                  />
               </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 text-start">
               <span className="bg-[#FFF3CF] text-[#FFA410] px-4 py-1 rounded-md">
                  Advanced Features
               </span>

               <h2 className="text-3xl md:text-4xl font-semibold leading-14 text-gray-800 mt-4">
                  Trusted & Popular <br /> Job Portal
               </h2>

               <p className="text-gray-600 mt-4 mb-8 leading-7">
                  Explore thousands of verified job opportunities from trusted
                  companies worldwide. Find the right career path, connect with
                  top employers, and apply without any hidden charges.
               </p>

               <div className="space-y-6">
                  {featuresData.map((item) => (
                     <div key={item.id} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-green-100 rounded-full flex items-center justify-center shadow-sm">
                           <div className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center">
                              <FaCheck />
                           </div>
                        </div>

                        <div>
                           <h4 className="text-lg font-semibold text-secondary">
                              {item.title}
                           </h4>

                           <p className="text-gray-500 text-sm mt-1 leading-7">
                              {item.desc}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Features;
