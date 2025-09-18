import logo from "../assets/skilloria.png";
import Button from "../components/Button";
import Container from "./Container";
import { Link, NavLink } from "react-router";

const Navbar = () => {
   const links = [
      <li key="home">
         <NavLink
            to="/"
            style={({ isActive, isPending }) => ({
               color: isPending ? "gray" : isActive ? "#15D164" : "black",
               fontWeight: isActive ? "semibold" : "normal",
            })}
         >
            Home
         </NavLink>
      </li>,

      <li key={"dashboard"}>
         <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "active" : ""
            }
         >
            Dashboard
         </NavLink>
      </li>,
   ];

   return (
      <Container>
         <div className="navbar bg-base-100 px-0 py-3 sticky top-0">
            <div className="navbar-start">
               <div className="dropdown">
                  <div
                     tabIndex={0}
                     role="button"
                     className="btn btn-ghost lg:hidden"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        {" "}
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />{" "}
                     </svg>
                  </div>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
                  >
                     {links}
                  </ul>
               </div>
               <Link to={'/'} className="flex items-center gap-3">
                  <img src={logo} alt="Logo" className="w-14" />
                  <p className="ebGaramond text-2xl font-bold">Skilloria</p>
               </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1 font-semibold">
                  {links}
               </ul>
            </div>

            <div className="navbar-end space-x-4">
               <Link to={"/login"}>
                  <button className="text-secondary font-semibold cursor-pointer">
                     Login
                  </button>
               </Link>

               <Link to={"/register"}>
                  <Button>Register</Button>
               </Link>
            </div>
         </div>
      </Container>
   );
};

export default Navbar;
