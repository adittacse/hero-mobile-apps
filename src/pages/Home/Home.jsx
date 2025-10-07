import { useLoaderData } from 'react-router';
import Banner from '../../components/Banner/Banner';
import TrendingApps from '../../components/TrendingApps/TrendingApps';

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <TrendingApps data={data}></TrendingApps>
        </div>
    );
};

export default Home;