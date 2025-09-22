import React from "react";
import Container from "../../components/Container";

const Testimonial = () => {
   return (
      <div className="py-20">
         <Container>
            <div>
               <div className="text-center">
                  <h2 className="text-4xl font-semibold">Good Reviews By Customers</h2>
                  <p className="max-w-7/12 mx-auto leading-7 mt-4">
                     At vero eos et accusamus et iusto odio dignissimos ducimus
                     qui blanditiis praesentium voluptatum deleniti atque
                     corrupti quos dolores
                  </p>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Testimonial;
