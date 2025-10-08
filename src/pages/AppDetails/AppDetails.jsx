import { useLoaderData, useParams } from 'react-router';
import downloadIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import "./AppDetails.css";
import { addToStoredDB, checkStoredDB } from '../../utilities/addToDB';
import { useEffect, useState } from 'react';

const AppDetails = () => {
    const [installed, setInstalled] = useState(false);
    const { id } = useParams();
    const apps = useLoaderData();

    useEffect(() => {
        const foundAppData = checkStoredDB(id);
        if (foundAppData) {
            setInstalled(true);
        }
    }, [id]);

    const appDetails = apps.find(app => app.id === parseInt(id));
    
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = appDetails;

    const ratingData = ratings.map(rating => ({
            name: rating.name,
            count: Number(rating.count)
        }
    ));
    
    const sortedRatingData = ratingData.sort((a, b) => parseInt(b.name) - parseInt(a.name));

    const handleInstallNow = () => {
        addToStoredDB(id, title);
        setInstalled(true);
    }

    return (
        <div className="py-20 px-4 md:px-10 lg:px-20">
            <div className="my-hero">
                <div className="flex flex-col lg:flex-row gap-[30px] ">
                    {/* <img src={image} className="max-w-sm rounded-lg" /> */}
                    <div className="flex justify-center items-center shrink-0">
                        <img src={image} className="max-w-sm rounded-lg" />
                    </div>
                    <div className="flex flex-col flex-1 w-full min-w-0">
                        <h1 className="text-5xl font-bold mb-3">{title}</h1>
                        <p className="text-[20px] text-[#627382] mb-[30px]">Developed by <span className="font-semibold bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] bg-clip-text text-transparent px-3.5 md:px-0">{companyName}</span></p>

                        <hr className="mb-[30px]" />

                        <div className="stats flex gap-10 [&>.stat]:border-0 w-fit mb-[30px]">
                            <div className="stat flex flex-col px-0">
                                <img className="w-10 h-10 mb-2" src={downloadIcon} alt="download icon" />
                                <div className="stat-title text-[#001931] mb-2">Downloads</div>
                                <div className="stat-value text-[#001931]">{downloads}M</div>
                            </div>

                            <div className="stat flex flex-col px-0">
                                <img className="w-10 h-10 mb-2" src={ratingsIcon} alt="download icon" />
                                <div className="stat-title text-[#001931] mb-2">Average Ratings</div>
                                <div className="stat-value text-[#001931]">{ratingAvg}</div>
                            </div>

                            <div className="stat flex flex-col px-0">
                                <img className="w-10 h-10 mb-2" src={reviewIcon} alt="download icon" />
                                <div className="stat-title text-[#001931] mb-2">Total Reviews</div>
                                <div className="stat-value text-[#001931]">{reviews}</div>
                            </div>
                        </div>

                        <button onClick={handleInstallNow} disabled={installed === true} className="btn bg-[#00D390] text-white w-fit mb-[30px]">{installed ? "Installed" : `Install Now (${size} MB)`}</button>
                    </div>
                </div>
            </div>

            <hr className="mb-[30px]" />

            <div>
                <h4 className="font-semibold text-2xl text-[#001931] mb-6">Ratings</h4>
                <div className="w-full h-[354px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={sortedRatingData} layout="vertical"
                            margin={{ top: 8, right: 16, bottom: 8, left: 24 }}>
                            <XAxis type="number" tickFormatter={value => value.toLocaleString()} />
                            <YAxis type="category" dataKey="name" width={60} />
                            <Tooltip formatter={(v) => v.toLocaleString()} />
                            <Bar dataKey="count" fill="#FF8811" radius={[0, 6, 6, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <hr className="my-10" />

            <div>
                <h4 className="font-semibold text-2xl text-[#001931] mb-6">Description</h4>
                <p className="text-[#627382]">{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;