import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../shared/Footer';

const MainLayout = () => {
   return (
      <div className='max-w-[1440px] mx-auto'>
         <Navbar />
         <Outlet />
         <Footer />
      </div>
   );
};

export default MainLayout;