import testimonials from "../../../public/Testimonial.json";
import Container from "../../components/Container";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
   return (
      <div className="py-20">
         <Container>
            <div>
               <div className="text-center">
                  <h2 className="text-4xl font-semibold">
                     Good Reviews By Customers
                  </h2>
                  <p className="max-w-7/12 mx-auto leading-7 mt-4">
                     At vero eos et accusamus et iusto odio dignissimos ducimus
                     qui blanditiis praesentium voluptatum deleniti atque
                     corrupti quos dolores
                  </p>
               </div>

               {/* Review Card */}
               <section className="mt-12">
                  <div className="max-w-7xl mx-auto">
                     {/* Grid layout */}
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Top row cards*/}
                        {testimonials.slice(0, 3).map((testimonial, index) => (
                           <div key={index} className="flex justify-center">
                              <TestimonialCard {...testimonial} />
                           </div>
                        ))}

                        {/* Bottom row cards*/}
                        <div className="md:col-span-2 lg:col-span-3 flex justify-center gap-6">
                           {testimonials.slice(3).map((testimonial, index) => (
                              <div key={index} className="w-full max-w-sm">
                                 <TestimonialCard {...testimonial} />
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </section>
            </div>
         </Container>
      </div>
   );
};

export default Testimonial;
