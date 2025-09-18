import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function Register() {
   const [serverError, setServerError] = useState("");

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   // Mutation for registration
   const mutation = useMutation({
      mutationFn: async (userData) => {
         const res = await axios
            .post(`${import.meta.env.VITE_BASE_URL}/users`, userData)
            // .then((res) => console.log(res.data))
            // .catch((error) => console.log(error));
            console.log(res.data);
         return res.data;
      },
      onError: (error) => {
         if (error.response?.status === 409) {
            setServerError("This email is already registered.");
         } else {
            setServerError("Something went wrong. Try again.");
         }
      },
      onSuccess: () => {
         alert("Registration successful!");
         reset();
         setServerError("");
      },
   });

   const onSubmit = (data) => {
      const { name, email, photoURL, password, role } = data;

      // Default coins
      const coins = role === "Worker" ? 10 : 50;

      const newUser = {
         name,
         email,
         photoURL,
         password,
         role,
         coins,
      };

      mutation.mutate(newUser);
   };

   return (
      <div className="min-h-screen flex justify-center items-center bg-[#EFF6F3]">
         <div className="w-full max-w-xl my-16 p-10 space-y-6 bg-white rounded-xl">
            <h2 className="ebGaramond text-4xl text-base-300 font-bold text-center tracking-wider">
               Create Account
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
               {/* Name */}
               <div>
                  <input
                     type="text"
                     placeholder="Full Name"
                     {...register("name", { required: "Name is required" })}
                     className="input input-bordered w-full"
                  />
                  {errors.name && (
                     <p className="text-red-500 text-sm">
                        {errors.name.message}
                     </p>
                  )}
               </div>

               {/* Email */}
               <div>
                  <input
                     type="email"
                     placeholder="Email"
                     {...register("email", {
                        required: "Email is required",
                        pattern: {
                           value: /^\S+@\S+$/i,
                           message: "Invalid email format",
                        },
                     })}
                     className="input input-bordered w-full"
                  />
                  {errors.email && (
                     <p className="text-red-500 text-sm">
                        {errors.email.message}
                     </p>
                  )}
               </div>

               {/* Profile Picture URL */}
               <div>
                  <input
                     type="url"
                     placeholder="Profile Picture URL"
                     {...register("photoURL", {
                        required: "Profile picture is required",
                     })}
                     className="input input-bordered w-full"
                  />
                  {errors.photoURL && (
                     <p className="text-red-500 text-sm">
                        {errors.photoURL.message}
                     </p>
                  )}
               </div>

               {/* Password */}
               <div>
                  <input
                     type="password"
                     placeholder="Password"
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
                     className="input input-bordered w-full"
                  />
                  {errors.password && (
                     <p className="text-red-500 text-sm">
                        {errors.password.message}
                     </p>
                  )}
               </div>

               {/* Role Dropdown */}
               <div>
                  <select
                     {...register("role", { required: "Role is required" })}
                     className="select select-bordered w-full"
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

               {/* Server Error */}
               {serverError && (
                  <p className="text-red-500 text-sm">{serverError}</p>
               )}

               {/* Submit Button */}
               <button
                  type="submit"
                  className="btn w-full bg-green-700 text-white hover:bg-green-800"
                  disabled={mutation.isLoading}
               >
                  {mutation.isLoading ? "Registering..." : "Register"}
               </button>
            </form>

            {/* Social Signup */}
            <div className="divider">OR</div>
            <div className="flex gap-3">
               <button className="btn btn-outline flex-1">
                  Signup with Google
               </button>
               <button className="btn btn-outline flex-1">
                  Signup with Facebook
               </button>
            </div>

            {/* Login Link */}
            <p className="text-sm text-center">
               Already have an account?{" "}
               <a href="/login" className="text-green-700 hover:underline">
                  Sign In
               </a>
            </p>
         </div>
      </div>
   );
}
