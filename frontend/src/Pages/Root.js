import { Link, Outlet } from "react-router-dom"
import { useState } from "react";
import Post from "../Components/Post";
import logoImage from '../assets/HUST__2_-removebg-preview 2.png';


function Root ()
{
    const [show, setShow] = useState(false)
    const [signedInUser, setSignedInUser] = useState(null);
    const [freelancers, setFreelancers] = useState([
        {
            id: 1,
            name: "Cazhia Reese Lleva",
            email: "crlleva@up.edu.ph",
            password: "newpass2024",
            contact: "09462406749",
            img: null,
            age: 20,
            rates: 200,
            average_rating: 4.5,
            location: "Batong Malake, Los Banos",
            service_type: [" tutoring", " mentoring"],
            usual_availability: ["Sunday", "Saturday"],
            history: [1, 2]
        },

        {
            id: 2,
            name: "Bea Capule",
            email: "bcapule@up.edu.ph",
            password: "beaSecure!",
            contact: "09462406749",
            img: null,
            age: 20,
            rates: 200,
            average_rating: 3.7,
            location: "Anos, Los Banos",
            service_type: ["thesis assistance", "research help"],
            usual_availability: ["Friday", "Saturday"],
            history: [1, 2]
        },

        {
            id: 3,
            name: "Psymon Sez Arcedera",
            email: "psarcedera@up.edu.ph",
            password: "psymon123!",
            contact: "09462406749",
            img: null,
            age: 20,
            rates: 200,
            average_rating: 4.1,
            location: "Mayondon, Los Banos",
            service_type: ["project assistance", " tutoring"],
            usual_availability: ["Tuesday", "Thursday"],
            history: [1, 2]
        },

        {
            id: 4,
            name: "Gello Cyrus Pre",
            email: "gcpre@up.edu.ph",
            password: "GelloC2024",
            contact: "09462406749",
            img: null,
            age: 20,
            rates: 200,
            average_rating: 5,
            location: "Tuntungin-Putho, Los Banos",
            service_type: ["lab assistance", "carpool"],
            usual_availability: ["Monday", "Wednesday"],
            history: [1, 2]
        },

        {
            id: 5,
            name: "Eron Jay Matira",
            email: "ejmatira@up.edu.ph",
            password: "ejpass2024",
            contact: "09462406749",
            img: null,
            age: 19,
            rates: 200,
            average_rating: 3.6,
            location: "Los Banos",
            service_type: ["note-taking", "study groups"],
            usual_availability: ["Friday", "Saturday"],
            history: [1, 2]
        },

        {
            id: 6,
            name: "Roche Quejada",
            email: "rquejada@up.edu.ph",
            password: "rochePass24",
            contact: "09123456789",
            img: null,
            age: 22,
            rates: 250,
            average_rating: 4,
            location: "Maahas, Los Banos",
            service_type: ["carpool ", "presentation "],
            usual_availability: ["Monday", "Wednesday"],
            history: [3, 4]
        },

        {
            id: 7,
            name: "Marc Joemil Mendoza",
            email: "mjmendoza@up.edu.ph",
            password: "marcJ2024!",
            contact: "09187654321",
            img: null,
            age: 25,
            rates: 300,
            average_rating: 5,
            location: "Bay, Laguna",
            service_type: ["research help", " tutoring"],
            usual_availability: ["Saturday", "Sunday"],
            history: [5, 6]
        },

        {
            id: 8,
            name: "Sebastian Merdegia",
            email: "smerdegia@up.edu.ph",
            password: "sebastian@2024",
            contact: "09988776655",
            img: null,
            age: 21,
            rates: 180,
            average_rating: 3.9,
            location: "College, Los Banos",
            service_type: ["designing ", "study groups"],
            usual_availability: ["Thursday", "Friday"],
            history: [2, 4]
        },

        {
            id: 9,
            name: "John Emy Bautista",
            email: "jebautista@up.edu.ph",
            password: "johnemyCode24",
            contact: "09223344556",
            img: null,
            age: 24,
            rates: 220,
            average_rating: 4.2,
            location: "Bagong Silang, Los Banos",
            service_type: ["coding assistance", "lab reports"],
            usual_availability: ["Tuesday", "Thursday"],
            history: [7, 8]
        }
    ]);
    
    const [clients, setClients] = useState([
        {
            id: 1,
            name: "Cazhia Reese Lleva",
            password: "newpass2024",
            email: "crlleva@up.edu.ph",
            contact: "09462406749",
            average_rating: 4.5,
            img: null,
            history: [1,2],
        },

        {
            id: 2,
            name: "Bea Capule",
            password: "beaSecure!",
            email: "bcapule@up.edu.ph",
            contact: "09462406749",
            img: null,
            average_rating: 3.7,
            history: [1, 2]
        },

        {
            id: 3,
            name: "Psymon Sez Arcedera",
            email: "psarcedera@up.edu.ph",
            password: "psymon123!",
            contact: "09462406749",
            img: null,
            average_rating: 4.1,
            history: [1, 2]
        },

        {
            id: 4,
            name: "Gello Cyrus Pre",
            email: "gcpre@up.edu.ph",
            password: "GelloC2024",
            contact: "09462406749",
            img: null,
            average_rating: 5,
            history: [1, 2]
        },

        {
            id: 5,
            name: "Eron Jay Matira",
            email: "ejmatira@up.edu.ph",
            password: "ejpass2024",
            contact: "09462406749",
            img: null,
            average_rating: 3.6,
            history: [1, 2]
        },

        {
            id: 6,
            name: "Roche Quejada",
            email: "rquejada@up.edu.ph",
            password: "rochePass24",
            contact: "09123456789",
            img: null,
            average_rating: 4,
            history: [3, 4]
        },

        {
            id: 7,
            name: "Marc Joemil Mendoza",
            email: "mjmendoza@up.edu.ph",
            password: "marcJ2024!",
            contact: "09187654321",
            img: null,
            average_rating: 5,
            history: [5, 6]
        },

        {
            id: 8,
            name: "Sebastian Merdegia",
            email: "smerdegia@up.edu.ph",
            password: "sebastian@2024",
            contact: "09988776655",
            img: null,
            average_rating: 3.9,
            history: [2, 4]
        },

        {
            id: 9,
            name: "John Emy Bautista",
            email: "jebautista@up.edu.ph",
            password: "johnemyCode24",
            contact: "09223344556",
            img: null,
            average_rating: 4.2,
            history: [7, 8]
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
            ratingFree: 5,
            ratingClient:5,
            difficulty: "Easy",
            requirements: "",
            rate: "200",
            date: "2024-09-15",
            date_posted: "2024-09-07",
            location: "UPLB CAS OCS",
            completed: true,
            forOffering: true,
        },

        {
            id: 2,
            title: "Pick up my thesis at Main Library",
            details: "Thesis is ready for pickup at the library, it needs to be submitted by end of the day.",
            type: ["errands"],
            clientId: 2,
            freelancerId: 2,
            difficulty: "Moderate",
            requirements: "Student ID needed",
            rate: "200",
            date: "2024-10-01",
            date_posted: "2024-09-25",
            location: "UPLB Main Library",
            completed: false,
            forOffering: true
        },

        {
            id: 3,
            title: "Assist in group study session",
            details: "Help review notes for an upcoming biology exam. Group session will be held in the afternoon.",
            type: ["tutoring", "academic assistance"],
            clientId: 3,
            freelancerId: 3,
            difficulty: "Easy",
            requirements: "Bring biology reference materials",
            rate: "200",
            date: "2024-09-20",
            date_posted: "2024-09-18",
            location: "Batong Malake Study Center",
            completed: false,
            forOffering: true
        },

        {
            id: 4,
            title: "Draft PowerPoint presentation for class",
            details: "Need a well-organized and visually appealing presentation for a sociology class.",
            ClientReview: "Presentation was beyond expectations!",
            type: ["presentation preparation", "academic assistance"],
            clientId: 4,
            freelancerId: 4,
            ratingFree: 5,
            ratingClient: 5,
            difficulty: "Moderate",
            requirements: "Presentation must include animations",
            rate: "200",
            date: "2024-09-22",
            date_posted: "2024-09-19",
            location: "Online submission",
            completed: true,
            forOffering: true
        },

        {
            id: 5,
            title: "Submit my application forms",
            details: "Drop off scholarship forms at the registrar’s office before 3 PM.",
            ClientReview: "On time and accurate submission.",
            type: ["errands"],
            clientId: 5,
            freelancerId: 5,
            ratingFree: 4.8,
            ratingClient: 5,
            difficulty: "Easy",
            requirements: "",
            rate: "200",
            date: "2024-09-30",
            date_posted: "2024-09-28",
            location: "UPLB Registrar's Office",
            completed: true,
            forOffering: true
        },

        {
            id: 6,
            title: "Proofread my research paper",
            details: "Need detailed proofreading for grammar, punctuation, and sentence structure.",
            ClientReview: "Thorough and well-done job.",
            type: ["academic assistance"],
            clientId: 6,
            freelancerId: 6,
            ratingFree: 5,
            ratingClient: 4.9,
            difficulty: "Moderate",
            requirements: "Expertise in English",
            rate: "200",
            date: "2024-09-18",
            date_posted: "2024-09-12",
            location: "Online submission",
            completed: true,
            forOffering: true
        },

        {
            id: 7,
            title: "Assist with my programming assignment",
            details: "Need help with a Java coding assignment due by the end of the week.",
            ClientReview: "Code worked perfectly. Very helpful!",
            type: ["coding assistance"],
            clientId: 7,
            freelancerId: 7,
            ratingFree: 4.7,
            ratingClient: 4.9,
            difficulty: "Challenging",
            requirements: "Proficiency in Java",
            rate: "200",
            date: "2024-09-29",
            date_posted: "2024-09-22",
            location: "Los Baños",
            completed: true,
            forOffering: true
        },

        {
            id: 8,
            title: "Organize notes for review",
            details: "Organize and format my notes for easier study. Needs to be done before the weekend.",
            type: ["academic assistance"],
            clientId: 8,
            freelancerId: 8,
            difficulty: "Easy",
            requirements: "",
            rate: "200",
            date: "2024-09-23",
            date_posted: "2024-09-21",
            location: "Maahas, Los Baños",
            completed: false,
            forOffering: true
        },

        {
            id: 9,
            title: "Help with lab report analysis",
            details: "Analyze lab results and write a detailed report. Needs to be submitted by tomorrow.",
            ClientReview: "Great attention to detail!",
            type: ["lab assistance", "academic assistance"],
            clientId: 9,
            freelancerId: 9,
            ratingFree: 4.6,
            ratingClient: 4.8,
            difficulty: "Challenging",
            requirements: "Experience in lab report writing",
            rate: "200",
            date: "2024-09-16",
            date_posted: "2024-09-14",
            location: "UPLB Biotech Lab",
            completed: true,
            forOffering: true
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
                        <Link to="/" className="text-yellow-400 text-xl font-bold hover:text-yellow-600">
                            HOME
                        </Link>
                        <Link to="/jobs" className="text-yellow-400 text-xl font-bold hover:text-yellow-600">
                            OFFERS
                        </Link>
                    </div>
                    {/* Right-side Menu */}
                    <div className="flex items-center space-x-8">
                        {signedInUser ? (
                            <>
                                <button onClick={() => setShow(true)} className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 font-bold">
                                    + POST
                                </button>
                                <Link to={`/profile/${signedInUser.id}`}>
                                    <img
                                        src={signedInUser?.img ? signedInUser.img : "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"}
                                        alt="User Profile"
                                        className="w-10 h-10 rounded-full object-cover hover:border-yellow-400 border-2"
                                    />
                                </Link>
                            </>
                        ) : (
                            <Link to="/signin" className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 font-bold">
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            </nav>

            {/* Post Job Modal */}
            {show && (
                <Post 
                    show={setShow} 
                    jobs={jobPostings} 
                    setJobs={setJobPostings} 
                    user={signedInUser} 
                    type={uniqueServiceTypes} 
                />
            )}

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
                        setSignedInUser,  // Pass this function to child components like SignIn
                        uniqueServiceTypes
                    }}
                />
            </div>
        </div>
    );
}

export default Root
