import { Link, useOutletContext } from "react-router-dom";

function Home() {
    const { freelancers, clients } = useOutletContext();

    return (
        <div className="bg-[#E9E6C7] min-h-screen flex flex-col justify-center items-center">
            {/* Grid of Freelancers */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-8 mx-12">
                {freelancers.map((user) => {
                    return (
                        <div className="flex w-full p-6 max-w-md flex-col rounded-3xl shadow-md" style={{ backgroundColor: '#1E1E1E' }}>
                            <div className="flex items-center gap-4 text-white">
                                <img 
                                    src={user.img ? user.img : "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"} 
                                    alt={user.name} 
                                    className="relative inline-block h-[120px] w-[120px] rounded-xl object-cover object-center"
                                />
                                <div className="flex w-full flex-col">
                                    <div className="flex items-center justify-between">
                                        <h5 className="text-2xl font-semibold text-yellow-400">
                                            {user.name}
                                        </h5>
                                    </div>
                                    <div className="flex items-left justify-left mt-1">
                                        {user.service_type.map((service, index) => (
                                            <div 
                                                key={index} 
                                                className="bg-yellow-400 rounded-2xl px-2 py-0.5 mx-1"
                                            >
                                                <h2 className="text-s font-semibold text-black">
                                                    {service}
                                                </h2>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-slate-400 mt-0.5">
                                        {user.age} years old
                                    </p>
                                    <p className="text-xs text-slate-400 mt-0.5">
                                        {user.location}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-0.5">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                            <div className="my-3 flex items-center">
                                <hr className="w-full" style={{ borderColor: "#E3BB2F" }} />
                            </div>
                            <div className="flex items-center justify-between">
                                <Link to={`/profile/${user.id}`}>
                                    <button className="bg-yellow-400 text-black px-4 py-2 rounded-3xl hover:bg-yellow-500">
                                        Hire me!
                                    </button>
                                </Link>
                                <p className="text-base text-slate-300 font-bold leading-normal">
                                    Rating: {user.average_rating}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Footer: Sticky to Bottom */}
            <footer className="w-full bg-yellow-400 p-4 mt-auto border-t border-yellow-400 shadow md:flex md:items-center md:justify-between md:p-2 bg-yellow-400">
                <span className="text-4xl font-bold text-black">
                    HIRE HUSTLEBEES!
                </span>
                <Link to="/jobs">
                    <button className="bg-black text-yellow-400 px-4 py-2 rounded-3xl hover:bg-gray-500 mt-4">
                        View Job Offers
                    </button>
                </Link>
            </footer>
            
        </div>
    );
}

export default Home;
