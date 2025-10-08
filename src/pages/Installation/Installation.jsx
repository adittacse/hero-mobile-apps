import { useLoaderData } from 'react-router';
import InstalledApps from '../../components/InstalledApps/InstalledApps';
import { getStoredApps, removeFromLS } from '../../utilities/addToDB';
import { useEffect, useState } from 'react';

const Installation = () => {
    const [data, setData] = useState([]);
    const apps = useLoaderData();

    useEffect(() => {
        const installedApps = getStoredApps();
        const convertedInstalledApps = installedApps.map(id => parseInt(id));
        setData(convertedInstalledApps);
    }, []);

    const filteredApps = apps.filter(app => data.includes(app.id));

    const handleAppUninstall = (id) => {
        removeFromLS(id);
        const newApps = data.filter(appId => appId !== id);
        setData(newApps);
    }
    
    return (
        <div className="py-20 px-4 md:px-10 lg:px-20">
            <div className="text-center mb-11">
                <h3 className="font-bold text-5xl text-[#001931] mb-5">Your Installed Apps</h3>
                <p className="text-[20px] text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mb-10">
                <h4 className="font-semibold text-2xl">({data.length}) Apps Found</h4>
                // sort by function will add here
            </div>

            <div className="flex flex-col gap-4">
                {
                    filteredApps.map(app => <InstalledApps key={app.id} app={app} handleAppUninstall={handleAppUninstall} />)
                }
            </div>
        </div>
    );
};

export default Installation;