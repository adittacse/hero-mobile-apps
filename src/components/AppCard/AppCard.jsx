import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AppCard = ({ app }) => {
    const { id, image, title, downloads, ratingAvg } = app;
    
    return (
        <Link to={`/app-details/${id}`}>
            <div className="card bg-base-100 shadow-sm">
                <figure className="p-4">
                    <img className="rounded-lg w-full h-40" src={image} alt="app image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title mb-4">{title}</h2>
                    <div className="card-actions justify-between">
                        <div className="flex items-center text-[#00D390] font-medium bg-[#F1F5E8] rounded-sm px-2.5 py-2">
                            <FiDownload className="w-4 h-4 mr-2" /> {downloads}M
                        </div>
                        <div className="flex items-center text-[#FF8811] font-medium bg-[#FFF0E1] rounded-sm px-2.5 py-2">
                            <FaStar className="w-4 h-4 mr-2" /> {ratingAvg}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;