import { Suspense } from 'react';
import AppCard from '../AppCard/AppCard';
import { Link } from 'react-router';

const TrendingApps = ({ data }) => {
    const firstEightData = data.slice(0, 8);

    return (
        <div className="text-center px-4 md:px-10 lg:px-20 mb-20">
            <h3 className="font-bold text-5xl text-[#001931] mb-5">Trending Apps</h3>
            <p className="text-[20px] text-[#627382] mb-10">Explore All Trending Apps on the Market developed by us</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 mb-10">
                <Suspense fallback={<p>Loading...</p>}>
                    {
                        firstEightData.map(app => <AppCard key={app.id} app={app} />)
                    }
                </Suspense>
            </div>
            <Link to="/apps" className="btn font-semibold text-white bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] rounded-sm px-[39px] py-[15px]">
                Show All
            </Link>
        </div>
    );
};

export default TrendingApps;