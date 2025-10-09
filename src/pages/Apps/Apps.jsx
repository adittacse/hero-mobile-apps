import { useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../../components/AppCard/AppCard';
import Loading from '../../components/Loading/Loading';

const Apps = () => {
    const apps = useLoaderData();
    const [filtered, setFiltered] = useState(apps);
    const [loading, setLoading] = useState(false);
    const searchRef = useRef(null);
    
    useEffect(() => {
        setFiltered(apps);
    }, [apps]);
    
    const handleSearch = () => {
        setLoading(true);
        const text = searchRef.current.value.trim().toLowerCase();

        setTimeout(() => {
            if (text === "") {
                setFiltered(apps);
                setLoading(false);
            } else {
                const result = apps.filter(app => app.title.toLowerCase().includes(text));
                setFiltered(result);
                setLoading(false);
            }
        }, 0);
    };

    const handleShowAllApps = () => {
        searchRef.current.value = "";
        setLoading(true);
        setTimeout(() => {
            setFiltered(apps);
            setLoading(false);
        }, 0);
    }

    return (
        <div className="py-20 px-4 md:px-10 lg:px-20">
            <div className="text-center mb-11">
                <h3 className="font-bold text-5xl text-[#001931] mb-5">Our All Applications</h3>
                <p className="text-[20px] text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            {/* apps count and search */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
                <h4 className="font-semibold text-2xl">({filtered.length}) Apps Found</h4>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input ref={searchRef} onChange={handleSearch} type="search" placeholder="Search Apps" />
                </label>
            </div>

            { 
                loading ? (
                    <div className="grid place-items-center min-h-36 mt-10">
                        <Loading />
                    </div>
                ) : (filtered.length === 0 ? (
                    <div className="flex flex-col justify-center items-center min-h-36">
                        <h3 className="font-bold text-4xl text-[#627382] mt-10 mb-6">No Apps Found</h3>
                        
                        <button onClick={handleShowAllApps} className="btn font-semibold text-white bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] rounded-sm px-[39px] py-[15px]">
                            Show All
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 mb-10">
                        {
                            filtered.map(app => <AppCard key={app.id} app={app} />)
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default Apps;