import googlePlayStore from "../../assets/google-play-store.png";
import appleAppStore from "../../assets/apple-app-store.png";
import bannerImage from "../../assets/hero.png";
import { Link } from "react-router";

const Banner = () => {
    return (
        <div className="flex flex-col justify-center text-center my-20">
            <h1 className="text-[#001931] text-7xl font-semibold mb-6">We Build <br /><span className="bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] bg-clip-text text-transparent px-3.5 md:px-0">Productive</span> Apps</h1>
            <p className="text-[#627382] mb-10 px-3.5 md:px-0">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className="flex justify-center gap-4 mb-10">
                <Link target="_blank" to="https://play.google.com/" className="btn bg-white text-black border-[#e5e5e5] py-6 px-[22px] gap-4">
                    <img className="w-8 h-8" src={googlePlayStore} alt="google play store" />
                    Google Play
                </Link>

                <Link target="_blank" to="https://www.apple.com/app-store/" className="btn bg-white text-black border-[#e5e5e5] py-6 px-[22px] gap-4">
                    <img className="w-8 h-8" src={appleAppStore} alt="google play store" />
                    App Store
                </Link>
            </div>

            <img className="w-[90%] md:w-[60%] text-center flex mx-auto" src={bannerImage} alt="banner image" />

            <div className="bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] py-20 px-3.5 md:px-0">
                <h2 className="font-bold text-white text-5xl mb-10">Trusted by Millions, Built for You</h2>

                <div className="md:stats [&>.stat]:border-0 text-white">
                    <div className="stat place-items-center">
                        <div className="stat-title text-white">Total Downloads</div>
                        <div className="stat-value">29.6M</div>
                        <div className="stat-desc text-white">21% more than last month</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title text-white">Total Reviews</div>
                        <div className="stat-value text-white">906K</div>
                        <div className="stat-desc text-white">46% more than last month</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title text-white">Active Apps</div>
                        <div className="stat-value">132+</div>
                        <div className="stat-desc text-white">31 more will Launch</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;