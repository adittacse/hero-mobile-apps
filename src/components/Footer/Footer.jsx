import logo from "../../assets/logo.png";
import x from "../../assets/x.png";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";

const Footer = () => {
    return (
        <div className="bg-[#001931] py-[35px] px-4 md:px-10 lg:px-20">
            <footer className="footer sm:footer-horizontal justify-between text-neutral-content mb-[30px]">
                <div className="flex items-center">
                    <img className="w-10 h-10" src={logo} alt="logo" />
                    <p className="font-bold">HERO.IO</p>
                </div>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className="grid grid-flow-col gap-4">
                    <a>
                        <img src={x} alt="x icon" />
                    </a>
                    <a>
                        <img src={linkedin} alt="linkedin icon" />
                    </a>
                    <a>
                        <img src={facebook} alt="facebook icon" />
                    </a>
                    </div>
                </nav>
            </footer>

            <div className="border-t border-[#E5E7EB]" />

            <footer className="footer sm:footer-horizontal footer-center text-[#FAFAFA] mt-[30px]">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;