import { Outlet, useNavigation } from 'react-router';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Loading from '../../components/Loading/Loading';

const Root = () => {
    const navigation = useNavigation();
    const isRouting = Boolean(navigation.location);
    const isSubmitting = navigation.state === "submitting";
    const isLoading = isRouting || isSubmitting;

    return (
        <div className="font-inter bg-[#D9D9D950]">
            {
                isLoading && <div className="fixed inset-0 z-50 grid place-items-center bg-white/70 backdrop-blur-sm">
                    <Loading />
                </div>
            }
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;