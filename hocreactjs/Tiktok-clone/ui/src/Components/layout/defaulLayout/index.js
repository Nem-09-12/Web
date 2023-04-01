import Header from '../components/header';
import Sidebar from './sidebar';

function DefaultLayout({ children }) {
   return (
      <div>
         <Header></Header>
         <div className="Content">
            <Sidebar></Sidebar>
            {children}
         </div>
      </div>
   );
}

export default DefaultLayout;
