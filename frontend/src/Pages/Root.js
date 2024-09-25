import { Link, Outlet } from "react-router-dom"
import { useEffect, useState } from "react";
import Post from "../Components/Post";
import logoImage from '../assets/HUST__2_-removebg-preview 2.png';


function Root ()
{
    const [show, setShow] = useState(false)
    const signedInUser = 1
    const [freelancers, setFreelancers] = useState([
        {
            id: 1,
            name: "Cazhia Reese Lleva",
            email: "clleva@up.edu.ph",
            password: "password",
            contact: "09462406749",
            img: null,
            age: 20,
            rates: 200,
            average_rating: 0,
            location: "Batong Malake",
            service_type: ["errands", "chores"],
            usual_availability: ["Sunday", "Saturday"],
            history: [1,2]
        },

        {
            id: 2,
            name: "Cyrus Gello Par",
            email: "cpar@up.edu.ph",
            password: "password",
            contact: "09462406749",
            img: null,
            age: 20,
            rates: 200,
            average_rating: 0,
            location: "Batong Malake",
            service_type: ["errands", "chores"],
            usual_availability: ["Sunday", "Saturday"],
            history: [1,2]
        },

        {
            id: 3,
            name: "Psymon Sez Arcedera",
            email: "pearcedera@up.edu.ph",
            password: "password",
            contact: "09462406749",
            img: null,
            age: 20,
            rates: 200,
            average_rating: 0,
            location: "Batong Malake",
            service_type: ["errands", "chores"],
            usual_availability: ["Sunday", "Saturday"],
            history: [1,2]
        },

        {
            id: 4,
            name: "Gello Cyrus Pre",
            email: "gcpre@up.edu.ph",
            password: "password",
            contact: "09462406749",
            img: null,
            age: 20,
            rates: 200,
            average_rating: 69,
            location: "Batong Malake",
            service_type: ["errands", "chores"],
            usual_availability: ["Sunday", "Saturday"],
            history: [1,2]
        }
    ]);
    
    const [clients, setClients] = useState([
        {
            id: 1,
            name: "Roche Quejada",
            password: "password",
            email: "hhh@up.edu.ph",
            contact: "091111111111",
            // average_rating: 0,
            img: null,
            history: [1],
        }
    ]);
    
    const [jobPostings, setJobPostings] = useState([
        {
            id: 1,
            title: "Submit my documents at CAS OCS",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur scelerisque commodo. Ut efficitur ipsum libero, ut congue nisl maximus non. Cras molestie lacus ac sem auctor, eget hendrerit ipsum rutrum. Fusce mollis ullamcorper purus non cursus. Cras consectetur odio vitae leo ornare, sed accumsan purus condimentum. ",
            ClientReview: "Lorem ipsum",
            type: ["errands"],
            clientId: 1,
            freelancerId: 1,
            // ratingFree: 5,
            // ratingClient:5,
            difficulty: "Easy",
            requirements: "",
            date: "2024-09-15",
            date_posted: "2024-09-07",
            location: "UPLB CAS OCS",
            completed: true,
            forOffering: true,
        },

        {
            id: 2,
            title: "Submit my documents at CAS OCS 2",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur scelerisque commodo. Ut efficitur ipsum libero, ut congue nisl maximus non. Cras molestie lacus ac sem auctor, eget hendrerit ipsum rutrum. Fusce mollis ullamcorper purus non cursus. Cras consectetur odio vitae leo ornare, sed accumsan purus condimentum. ",
            type: ["errands"],
            clientId: 1,
            difficulty: "Easy",
            requirements: "Lorem Ipsum",
            date: "2024-09-15",
            date_posted: "2024-09-07",
            location: "UPLB CAS OCS",
            completed: false,
            forOffering: true, 
        },

        {
            id: 3,
            title: "Submit my documents at CAS OCS",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur scelerisque commodo. Ut efficitur ipsum libero, ut congue nisl maximus non. Cras molestie lacus ac sem auctor, eget hendrerit ipsum rutrum. Fusce mollis ullamcorper purus non cursus. Cras consectetur odio vitae leo ornare, sed accumsan purus condimentum. ",
            ClientReview: "Lorem ipsum",
            type: ["errands"],
            clientId: 1,
            freelancerId: 1,
            // ratingFree: 5,
            // ratingClient:5,
            difficulty: "Easy",
            requirements: "",
            date: "2024-09-15",
            date_posted: "2024-09-07",
            location: "UPLB CAS OCS",
            completed: true,
            forOffering: true,
        },

        {
            id: 4,
            title: "Submit my documents at CAS OCS",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur scelerisque commodo. Ut efficitur ipsum libero, ut congue nisl maximus non. Cras molestie lacus ac sem auctor, eget hendrerit ipsum rutrum. Fusce mollis ullamcorper purus non cursus. Cras consectetur odio vitae leo ornare, sed accumsan purus condimentum. ",
            ClientReview: "Lorem ipsum",
            type: ["errands"],
            clientId: 1,
            freelancerId: 1,
            // ratingFree: 5,
            // ratingClient:5,
            difficulty: "Easy",
            requirements: "",
            date: "2024-09-15",
            date_posted: "2024-09-07",
            location: "UPLB CAS OCS",
            completed: true,
            forOffering: true,
        },

        {
            id: 5,
            title: "Submit my documents at CAS OCS",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur scelerisque commodo. Ut efficitur ipsum libero, ut congue nisl maximus non. Cras molestie lacus ac sem auctor, eget hendrerit ipsum rutrum. Fusce mollis ullamcorper purus non cursus. Cras consectetur odio vitae leo ornare, sed accumsan purus condimentum. ",
            ClientReview: "Lorem ipsum",
            type: ["errands"],
            clientId: 1,
            freelancerId: 1,
            // ratingFree: 5,
            // ratingClient:5,
            difficulty: "Easy",
            requirements: "",
            date: "2024-09-15",
            date_posted: "2024-09-07",
            location: "UPLB CAS OCS",
            completed: true,
            forOffering: true,
        },

        {
            id: 6,
            title: "Submit my documents at CAS OCS",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur scelerisque commodo. Ut efficitur ipsum libero, ut congue nisl maximus non. Cras molestie lacus ac sem auctor, eget hendrerit ipsum rutrum. Fusce mollis ullamcorper purus non cursus. Cras consectetur odio vitae leo ornare, sed accumsan purus condimentum. ",
            ClientReview: "Lorem ipsum",
            type: ["errands"],
            clientId: 1,
            freelancerId: 1,
            // ratingFree: 5,
            // ratingClient:5,
            difficulty: "Easy",
            requirements: "",
            date: "2024-09-15",
            date_posted: "2024-09-07",
            location: "UPLB CAS OCS",
            completed: true,
            forOffering: true,
        },
    ]);
    

    const uniqueServiceTypes = [...new Set(freelancers.flatMap(freelancer => freelancer.service_type))];

    return (
        <div>
        <nav className="bg-[#1E1E1E] p-2 shadow-2xl">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-8">
                    <Link to="/">
                        <img src={logoImage} alt="Logo" className="w-48 h-24" />
                    </Link>
                    <Link to="/"  className="text-yellow-400 text-xl font-bold hover:text-yellow-600">
                        HOME
                    </Link>
                    <Link to="/jobs"  className="text-yellow-400 text-xl font-bold hover:text-yellow-600">
                        OFFERS
                    </Link>
                </div>
                {/* Right-side Menu */}
                <div className="flex items-center space-x-8">
                    <button onClick={() => setShow(true)} className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 font-bold">
                        + POST
                    </button>
                    <Link to={`/profile/${signedInUser}`}>
                        <img
                            src={signedInUser?.img ? signedInUser.img : "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"}
                            alt="User Profile"
                            className="w-10 h-10 rounded-full object-cover hover:border-yellow-400 border-2"
                        />
                    </Link>
                </div>
            </div>
        </nav>
    
        {/* Post Job Modal */}
        {
            show ? (
                <Post 
                    show={setShow} 
                    jobs={jobPostings} 
                    setJobs={setJobPostings} 
                    user={signedInUser} 
                    type={uniqueServiceTypes}
                />
            ) : null
        }
    
        {/* Main Content */}
        <div>
            <Outlet 
                context={{
                    freelancers, 
                    setFreelancers, 
                    clients, 
                    setClients, 
                    jobPostings, 
                    setJobPostings, 
                    signedInUser, 
                    uniqueServiceTypes
                }}
            />
        </div>
    </div>
    
    );
}

export default Root