import { useLoaderData } from 'react-router';
import InstalledApps from '../../components/InstalledApps/InstalledApps';
import { getStoredApps, removeFromLS } from '../../utilities/addToDB';
import { useEffect, useState } from 'react';
import { BiSolidDownArrow } from "react-icons/bi";
import Loading from '../../components/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';

const Installation = () => {
    const [data, setData] = useState([]);
    const [sortedApps, setSortedApps] = useState([]);
    const apps = useLoaderData();

    // setting state installed apps id's
    useEffect(() => {
        const installedApps = getStoredApps();
        const convertedInstalledApps = installedApps.map(id => parseInt(id));
        setData(convertedInstalledApps);
    }, []);

    const filteredApps = apps.filter(app => data.includes(app.id));

    // first time data load without sorting
    useEffect(() => {
        const appList = apps.filter(app => data.includes(app.id));
        setSortedApps(appList);
    }, [apps, data]);

    const handleAppUninstall = (id) => {
        removeFromLS(id);
        const newApps = data.filter(appId => appId !== id);
        setData(newApps);
    }

    const handleSort = (type) => {
        if (type === "low-high") {
            const sortedInstalledApps = [...filteredApps].sort((a, b) => 
                a.downloads - b.downloads
            );
            setSortedApps(sortedInstalledApps);
        } if (type === "high-low") {
            const sortedInstalledApps = [...filteredApps].sort((a, b) => 
                b.downloads - a.downloads
            );
            setSortedApps(sortedInstalledApps);
        }
    }
    
    return (
        <div className="py-20 px-4 md:px-10 lg:px-20">
            <div className="text-center mb-11">
                <h3 className="font-bold text-5xl text-[#001931] mb-5">Your Installed Apps</h3>
                <p className="text-[20px] text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mb-10">
                <h4 className="font-semibold text-2xl">({data.length}) Apps Found</h4>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By Size <BiSolidDownArrow /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleSort("low-high")}><a>Low-High</a></li>
                        <li onClick={() => handleSort("high-low")}><a>High-Low</a></li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                {
                    sortedApps.map(app => <InstalledApps key={app.id} app={app} handleAppUninstall={handleAppUninstall} />)
                }
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Installation;