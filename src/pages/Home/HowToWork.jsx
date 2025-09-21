import Container from "../../components/Container";
import workData from "../../../public/works.json";

const HowToWork = () => {
   return (
      <div className="py-20">
         <Container>
            <div>
               <div>
                  <h2 className="ebGaramond divider text-6xl font-bold text-center">
                     How it’s Work?
                  </h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24 border-b border-gray-200">
                  {workData.map((item, index) => (
                     <div className="text-center border-b border-transparent hover:border-green-500 pb-14 duration-300">
                        <span className="bg-primary text-white text-lg font-semibold rounded-md px-3 py-3">
                           0{index + 1}
                        </span>

                        <h4 className="text-2xl text-secondary font-semibold mt-8 mb-4">
                           {item?.title}
                        </h4>

                        <p className="text-lg text-base-300 leading-8">
                           {item?.description}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </Container>
      </div>
   );
};

export default HowToWork;
