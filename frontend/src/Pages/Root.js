import { Link, Outlet } from "react-router-dom"
import { useState } from "react";
import Post from "../Components/Post";


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
            average_rating: 0,
            img: './images/roche.jpg',
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
            ratingFree: 5,
            ratingClient:5,
            difficulty: "Easy",
            requirements: "",
            date: "2024-09-15",
            date_posted: "2024-09-07",
            location: "UPLB CAS OCS",
            completed: true
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
        }
    ]);
    

    const uniqueServiceTypes = [...new Set(freelancers.flatMap(freelancer => freelancer.service_type))];

    return (
    <div>
        <nav>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to={`/profile/${signedInUser}`}>Profile</Link></li>
                <li> <Link to="/SignUp">Sign Up</Link> </li>
                <li> <Link to="/SignIn">SignIn</Link> </li>
                <li> <Link to="/BuildFreelancer">BuildFreelancer</Link> </li>
                <li> <Link to="/BuildClient">Buildclient</Link> </li>
                <button onClick={() => setShow(true)}> Post a job offer! </button>
                {/* check here if may existing client profile */}
                {
                    show ? (
                        <Post show = {setShow} jobs = {jobPostings} setJobs = {setJobPostings} user = {signedInUser} type = {uniqueServiceTypes}/>
                    ): null
                }

            </ul>
        </nav>

        <div>
            <Outlet context={{freelancers, setFreelancers, clients, setClients, jobPostings, setJobPostings, signedInUser, uniqueServiceTypes}}/>
        </div>
    </div>
    );
}

export default Root