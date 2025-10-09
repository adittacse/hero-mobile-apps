import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const InstalledApps = ({ app, handleAppUninstall }) => {
    const { id, image, title, size, ratingAvg, downloads } = app;

    return (
        <div className="bg-white rounded-lg p-4">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="flex items-center">
                    <img className="w-24 h-20 mr-4 rounded-2xl" src={image} alt="app image" />
                    <div>
                        <Link to={`/app-details/${id}`}>
                            <h1 className="text-[20px] font-medium mb-4">{title}</h1>
                        </Link>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center text-[#00D390] font-medium gap-1">
                                <FiDownload />
                                <p>{downloads}M</p>
                            </div>
                            <div className="flex items-center text-[#FF8811] font-medium gap-1">
                                <FaStar />
                                <p>{ratingAvg}</p>
                            </div>
                            <p className="text-[#627382]">{size} MB</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => handleAppUninstall(id)} className="btn bg-[#00D390] text-white">Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledApps;