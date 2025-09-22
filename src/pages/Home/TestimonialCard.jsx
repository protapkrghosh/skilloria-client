import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ name, title, role, image, rating, text }) => {
   return (
      <div className="rounded-box border-2 border-[#F1F3F7] p-6 bg-base-100 w-full max-w-sm">
         <h3 className="font-semibold text-lg mb-2">"{title}"</h3>
         <p className="text-sm text-gray-500 mb-4 leading-6">{text}</p>

         <div className="flex items-center space-x-6 mt-7">
            <div className="avatar">
               <div className="w-16 h-16 rounded-full ring-2 ring-[#e1e5ecd2] ring-offset-base-100 ring-offset-4">
                  <img src={image} alt={name} />
               </div>
            </div>

            <div>
               <p className="font-semibold capitalize">{name}</p>
               <p className="text-sm text-primary font-medium">{role}</p>
               <div className="flex text-yellow-500 mt-1 text-[12px] space-x-[2px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                     <FaStar
                        key={i}
                        className={
                           i < rating ? "text-yellow-500" : "text-gray-300"
                        }
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default TestimonialCard;
