import toast from "react-hot-toast";
import logo from "../assets/skilloria.png";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";
import Container from "../components/Container";
import { Link, NavLink } from "react-router";
import { Tooltip } from "react-tooltip";
import { FaCoins } from "react-icons/fa";

const Navbar = () => {
   const { user, logOutUser } = useAuth();

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
         {user ? (
            <NavLink
               to="/dashboard"
               className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
               }
            >
               Dashboard
            </NavLink>
         ) : (
            ""
         )}
      </li>,
   ];

   const handleLogOut = () => {
      logOutUser()
         .then(() => {
            toast.success("Logout Successfully");
         })
         .catch((error) => toast.error(error.code));
   };

   return (
      <div className="sticky top-0 z-50 bg-[#fff]">
         <Container>
            <div className="navbar px-0 py-3">
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

                  <Link to={"/"} className="flex items-center gap-3">
                     <img src={logo} alt="Logo" className="w-14" />
                     <p className="text-2xl font-bold hidden md:block">Skilloria</p>
                  </Link>
               </div>
               <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1 font-semibold">
                     {links}
                  </ul>
               </div>

               <div className="navbar-end space-x-4">
                  {user ? (
                     <div className="relative">
                        <div className="border border-[#FEC40F] text-[#FEC40F] bg-[#fff3cf23] p-2 rounded-full">
                           <FaCoins />
                        </div>

                        <span className="text-white text-[11px] font-semibold absolute -top-1 -right-1 bg-[#254035e8] h-4 w-4 rounded-full flex justify-center items-center">
                           99
                        </span>
                     </div>
                  ) : (
                     ""
                  )}

                  {/* Join as developer */}
                  <a
                     href="https://github.com/protapkrghosh/skilloria-client"
                     target="_blank"
                  >
                     <button className="btn-dev">Join as Developer</button>
                  </a>

                  {user ? (
                     <>
                        <div
                           className="avatar avatar-online"
                           data-tooltip-id="user-tooltip"
                           data-tooltip-place="bottom"
                        >
                           <div className="w-10 rounded-full ring-[#00bf592d] ring-2 ring-offset-1">
                              <img
                                 src={
                                    user?.photoURL
                                       ? user.photoURL
                                       : "https://i.ibb.co/mFrvXNpF/avatar.png"
                                 }
                                 alt="User Avatar"
                              />
                           </div>
                        </div>

                        <Tooltip
                           id="user-tooltip"
                           className="text-secondary bg-secondary"
                           clickable={true}
                           style={{
                              backgroundColor: "#E1E1E1",
                              color: "#000",
                              padding: "20px",
                              borderRadius: "5px",
                              textAlign: "center",
                              fontSize: "14px",
                           }}
                        >
                           <div>
                              <div>
                                 <h4 className="text-[18px] font-semibold capitalize rancho tracking-widest">
                                    {user?.displayName}
                                 </h4>
                                 <p className="text-[14px] text-slate-600">
                                    {user?.email}
                                 </p>
                              </div>

                              <button
                                 onClick={handleLogOut}
                                 className="btn btn-primary hover:bg-secondary text-white text-[14px] rounded-full mt-4 px-7"
                              >
                                 LogOut
                              </button>
                           </div>
                        </Tooltip>
                     </>
                  ) : (
                     <>
                        <div className="hidden md:block">
                           <Link to={"/register"}>
                              <Button>Register</Button>
                           </Link>
                        </div>
                     </>
                  )}
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Navbar;
