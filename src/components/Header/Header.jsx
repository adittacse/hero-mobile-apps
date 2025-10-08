import { Link } from 'react-router';
import { SiGithub } from "react-icons/si";
import logo from "../../assets/logo.png";

const Header = () => {
    const link = <>
        <Link to="/" className="mr-8"><li>Home</li></Link>
        <Link to="/apps" className="mr-8"><li>Apps</li></Link>
        <Link to="/installation"><li>Installation</li></Link>
    </>
    
    return (
        <div className="navbar bg-base-100 shadow-sm px-4 md:px-10 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <Link to="/" className="font-bold flex items-center gap-1">
                    <img className="w-10 h-10" src={logo} alt="logo" /> <span className="bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] bg-clip-text text-transparent">HERO.IO</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <Link target="_blank" to="https://github.com/adittacse" className="btn font-semibold text-white bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] rounded-sm">
                    <SiGithub className="w-5 h-5 mr-2.5" /> Contribute
                </Link>
            </div>
        </div>
    );
};

export default Header;