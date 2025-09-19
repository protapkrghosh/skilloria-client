import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import SocialLogIn from "../components/SocialLogin";
import { useState } from "react";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Register = () => {
   const [showPassword, setShowPassword] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state || "/";
   const { registerUser } = useAuth();

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   const onSubmit = (data) => {
      const { name, email, photoURL, password, role } = data;
      const coins = role === "Worker" ? 10 : 50;

      const newUser = {
         name,
         email,
         photoURL,
         role,
         coins,
      };

      registerUser(email, password)
         .then(() => {
            axios
               .post(`${import.meta.env.VITE_BASE_URL}/users`, newUser)
               .then((res) => {
                  if (res.data.insertedId) {
                     toast.success("Registration successful!");
                     navigate(from);
                     reset();
                  }

                  // Update user profile
                  const profile = {
                     displayName: name,
                     photoURL: photoURL,
                  };

                  updateProfile(auth.currentUser, profile)
                     .then(() => {})
                     .catch((error) => toast.error(error.code));
               })
               .catch((error) => {
                  toast.error(error.response?.data?.message || error.code);
               });
         })
         .catch((error) => {
            toast.error(error.code);
         });
   };

   return (
      <div className="min-h-screen flex justify-center items-center bg-[#EFF6F3]">
         <div className="w-full max-w-xl my-16 p-10 space-y-6 bg-white rounded-xl shadow-md">
            <div className="text-center">
               <h2 className="ebGaramond text-4xl text-base-300 font-bold tracking-wider">
                  Create Account
               </h2>
               <p className="text-[14px] mt-1">
                  Create an account & Start posting or hiring talents
               </p>
            </div>

            {/* Social Signup */}
            <SocialLogIn />

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
               {/* Name */}
               <div>
                  <label className="label text-[15px]">Name*</label>
                  <input
                     type="text"
                     placeholder="James Norris"
                     {...register("name", { required: "Name is required" })}
                     className="cus-input"
                  />
                  {errors.name && (
                     <p className="text-red-500 text-sm">
                        {errors.name.message}
                     </p>
                  )}
               </div>

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

               {/* Profile URL */}
               <div>
                  <label className="label text-[15px]">Photo URL*</label>
                  <input
                     type="url"
                     placeholder="Profile Picture URL"
                     {...register("photoURL", {
                        required: "Profile picture is required",
                     })}
                     className="cus-input"
                  />
                  {errors.photoURL && (
                     <p className="text-red-500 text-sm">
                        {errors.photoURL.message}
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

               {/* User Role */}
               <div>
                  <label className="label text-[15px]">Role*</label>
                  <select
                     {...register("role", { required: "Role is required" })}
                     className="select select-bordered w-full h-12 cus-select"
                  >
                     <option value="">Select Role</option>
                     <option value="Worker">Worker</option>
                     <option value="Buyer">Buyer</option>
                  </select>
                  {errors.role && (
                     <p className="text-red-500 text-sm">
                        {errors.role.message}
                     </p>
                  )}
               </div>

               {/* Submit Button */}
               <button
                  type="submit"
                  className="btn w-full h-12 rounded-lg text-white bg-primary hover:bg-secondary duration-500 uppercase tracking-widest mt-4"
               >
                  Register
               </button>
            </form>

            {/* Login Link */}
            <p className="text-sm text-center -mt-2">
               Already have an account?{" "}
               <a href="/login" className="text-green-700 hover:underline">
                  <span className="font-semibold">Sign In</span>
               </a>
            </p>
         </div>
      </div>
   );
};

export default Register;
