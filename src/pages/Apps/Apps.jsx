import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../../components/AppCard/AppCard';
import Loading from '../../components/Loading/Loading';

const Apps = () => {
    const [loading, setLoading] = useState(true);
    const apps = useLoaderData();

    useEffect(() => {
        const time = setTimeout(() => setLoading(false), 600);
        return () => {
            clearTimeout(time);
        }
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="py-20 px-4 md:px-10 lg:px-20">
            <div className="grid grid-cols-4 gap-4 mt-10 mb-10">
                {
                    apps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }
            </div>
        </div>
    );
};

export default Apps;