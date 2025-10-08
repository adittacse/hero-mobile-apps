import { useNavigate } from 'react-router';
import notFoundImage from "../../assets/error-404.png"

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <div className="grid place-items-center text-center min-h-screen py-20 px-4 md:px-10 lg:px-20">
            <img src={notFoundImage} alt="not found image" />
            <h1 className="text-4xl text-[#001931] font-bold mb-4">Oops, page not found!</h1>
            <p className="text-[#627382] mb-4">
                The page you are looking for is not available.
            </p>
            <button onClick={() => navigate(-1)} className="btn font-semibold text-white bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] rounded-sm">Go Back!</button>
        </div>
    );
};

export default NotFoundPage;