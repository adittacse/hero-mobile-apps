import Banner from '../../components/Banner/Banner';
import TrendingApps from '../../components/TrendingApps/TrendingApps';

const Home = ({ dataPromise }) => {
    return (
        <div>
            <Banner></Banner>
            <TrendingApps dataPromise={dataPromise}></TrendingApps>
        </div>
    );
};

export default Home;