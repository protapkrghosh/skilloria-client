import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const SocialLogIn = () => {
   const { googleSignIn } = useAuth();

   const handleGoogleLogIn = () => {
      googleSignIn()
         .then((res) => {
            toast.success("Login Successfully");
         })
         .catch((error) => toast.error(error.code));
   };

   return (
      <div className="mt-10">
         <div className="flex flex-col md:flex-row w-full gap-5 mb-7">
            <button
               onClick={handleGoogleLogIn}
               className="btn bg-white text-secondary border-gray-200 py-6 w-full md:w-[calc(50%-10px)]"
            >
               <FcGoogle size={20} />
               Login with Google
            </button>

            <button className="btn bg-white text-secondary border-gray-200 py-6 w-full md:w-[calc(50%-10px)]">
               <BsGithub size={20} />
               Login with GitHub
            </button>
         </div>

         <div className="divider">OR</div>
      </div>
   );
};

export default SocialLogIn;
