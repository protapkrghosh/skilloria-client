import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import SocialLogIn from "../components/SocialLogin";
import { useState } from "react";
import { ImEye, ImEyeBlocked } from "react-icons/im";

const Login = () => {
   const [showPassword, setShowPassword] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state || "/";
   const { logInUser } = useAuth();

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   const onSubmit = (data) => {
      const { email, password } = data;

      logInUser(email, password)
         .then((res) => {
            toast.success("User login successful");
            navigate(from);
            // reset();
         })
         .catch((error) => {
            toast.error(error.code);
         });
   };

   return (
      <div className="min-h-screen flex justify-center items-center bg-[#EFF6F3]">
         <div className="w-full max-w-xl my-16 p-10 space-y-6 bg-white rounded-xl shadow-md">
            <div className="text-center mb-10">
               <h2 className="ebGaramond text-4xl text-base-300 font-bold tracking-wider">
                  Hi, Welcome Back!
               </h2>
            </div>

            {/* Social Signup */}
            <SocialLogIn />

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
               {/* Email */}
               <div>
                  <label className="label text-[15px]">Email*</label>
                  <input
                     type="email"
                     placeholder="james@example.com"
                     {...register("email", {
                        required: "Email is required",
                        pattern: {
                           value: /^\S+@\S+$/i,
                           message: "Invalid email format",
                        },
                     })}
                     className="cus-input"
                  />
                  {errors.email && (
                     <p className="text-red-500 text-sm">
                        {errors.email.message}
                     </p>
                  )}
               </div>

               {/* Password */}
               <div className="relative">
                  <label className="label text-[15px]">Password*</label>
                  <input
                     type={showPassword ? "text" : "password"}
                     placeholder="Enter Password"
                     {...register("password", {
                        required: "Password is required",
                        minLength: {
                           value: 6,
                           message: "Password must be at least 6 characters",
                        },
                        validate: {
                           hasUpper: (v) =>
                              /[A-Z]/.test(v) ||
                              "Must contain an uppercase letter",
                           hasNumber: (v) =>
                              /\d/.test(v) || "Must contain a number",
                        },
                     })}
                     className="cus-input"
                  />

                  <span
                     onClick={() => setShowPassword(!showPassword)}
                     className="absolute top-[45px] right-2 z-30"
                  >
                     {showPassword ? (
                        <ImEye
                           size={18}
                           className="text-[#8B8B8D] mr-2 cursor-pointer"
                        />
                     ) : (
                        <ImEyeBlocked
                           size={18}
                           className="text-[#8B8B8D] mr-2 cursor-pointer"
                        />
                     )}
                  </span>

                  {/* Error */}
                  {errors.password && (
                     <p className="text-red-500 text-sm">
                        {errors.password.message}
                     </p>
                  )}
               </div>

               {/* Submit Button */}
               <button
                  type="submit"
                  className="btn w-full h-12 rounded-lg text-white bg-primary hover:bg-secondary duration-500 uppercase tracking-widest mt-4"
               >
                  Login
               </button>
            </form>

            {/* Login Link */}
            <p className="text-sm text-center -mt-2">
               Already have an account?{" "}
               <a href="/register" className="text-green-700 hover:underline">
                  <span className="font-semibold">Register</span>
               </a>
            </p>
         </div>
      </div>
   );
};

export default Login;
