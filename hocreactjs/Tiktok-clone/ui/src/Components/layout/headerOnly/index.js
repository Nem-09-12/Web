import Header from '../components/header';

function HeaderOnly({ children }) {
   return (
      <div>
         <Header></Header>
         <div className="Content">{children}</div>
      </div>
   );
}

export default HeaderOnly;
