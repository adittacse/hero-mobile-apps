import { Link } from "react-router";
import appNotFoundImage from "../../assets/App-Error.png";

const NotFoundApp = () => {
    return (
        <div className="grid place-items-center text-center min-h-screen py-20 px-4 md:px-10 lg:px-20">
            <img className="mb-4" src={appNotFoundImage} alt="not found image" />
            <h1 className="text-4xl text-[#001931] font-bold mb-4">App Is Not Found</h1>
            <p className="text-[#627382] mb-4">
                The app you are looking for does not exist or has been removed.
            </p>
            <Link to="/" className="btn font-semibold text-white bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] rounded-sm px-10 py-4">Back to Home</Link>
        </div>
    );
};

export default NotFoundApp;