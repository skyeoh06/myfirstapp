import './home.module.css';

const Layout = ({children}) => {
    return (  <div>
        <nav>Home About</nav>
        {children}
    </div>);
}
 
export default Layout;