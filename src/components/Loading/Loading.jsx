import logo from "../../assets/logo.png";

const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="flex items-center font-bold text-5xl text-[#627382]">
                L<img className="w-20 h-20 mx-6 animate-[spin_1.1s_linear_infinite]" src={logo} alt="loading logo" />ading
            </h1>
        </div>
    );
};

export default Loading;