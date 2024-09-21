import { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import OfferJob from "../Components/OfferJob";
import FreelancerProfile from "./FreelancerProfile";
import ClientProfile from "./ClientProfile";

function Profile ()
{
 let {id}  = useParams();

 const {clients, freelancers, jobPostings, setJobPostings, signedInUser, uniqueServiceTypes} = useOutletContext();
 const [user, setUser] = useState({ freelancer: null, client: null });
const [show, setShow] = useState(true)
const[fHistory, setfHistory] = useState([])
const[cHistory, setcHistory] = useState([])

const[offerJob, setShowOfferJob] = useState(false)

const findUserById = (_id) => {
    // Find the freelancer by id
    const freelancer = freelancers.find((freelancer) => freelancer.id === _id);
    const client = clients.find((client) => client.id === _id);
    console.log(clients)
    console.log(freelancers)
    console.log("Freelancer:", freelancer);
    console.log("Client:", client);

    setUser({
      freelancer: freelancer || null,
      client: client || null,
    });
    accessHistory(freelancer, client) 
  };

const accessHistory = (freelancer, client) => {

    if (freelancer)
        {
            const f_history = jobPostings.filter((jobs) => jobs.completed === true && jobs.freelancerId  === freelancer.id)
            setfHistory(f_history)
        }
        if (client)
        {
            const c_history = jobPostings.filter((jobs) => jobs.completed === true && jobs.clientId === client.id)
             setcHistory(c_history)
            
             console.log(c_history)
        } 
}


useEffect(() => {
    if (id) {
        findUserById(parseInt(id,10))
    }
}, [id])

return (
    <div>
        {user.freelancer && user.client ? (
            <div>
                <button onClick={() => setShow(true)}>Freelancer Profile</button>
                <button onClick={() => setShow(false)}>Client Profile</button>
               { show ? (
                <FreelancerProfile clients = {clients} fHistory = {fHistory} user = {user} show = {offerJob} setShowOfferJob = {setShowOfferJob} jobPostings={jobPostings} setJobPostings = {setJobPostings} signedInUser = {signedInUser} uniqueServiceTypes = {uniqueServiceTypes}/>
                ) : (         
                <ClientProfile jobPostings={jobPostings} setJobPostings = {setJobPostings} clients = {clients} freelancers = {freelancers} cHistory = {cHistory}  user = {user} />
                )
            }
            </div>
        ) : user.freelancer ? (
            <FreelancerProfile clients = {clients} fHistory = {fHistory} user = {user} show = {offerJob} setShowOfferJob = {setShowOfferJob} jobPostings={jobPostings} setJobPostings = {setJobPostings} signedInUser = {signedInUser} uniqueServiceTypes = {uniqueServiceTypes}/>
        ) : user.client ? (
            <ClientProfile  jobPostings={jobPostings} setJobPostings = {setJobPostings} clients = {clients} freelancers = {freelancers} cHistory = {cHistory}  user = {user} />
        ) : (
            <div>
                <h3>User not found</h3>
            </div>
        )}
    </div>
);

}

export default Profile