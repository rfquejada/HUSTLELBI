import { useState } from "react";
import OfferJob from "../Components/OfferJob";
import FreelancerCompleted from "../Components/FreelancerCompleted";
import DirectOffer from "../Components/DirectOffer";


function FreelancerProfile (props)
{
    
 const user = props.user 
 const offerJob = props.show 
 const setShowOfferJob = props.setShowOfferJob
 const jobPostings = props.jobPostings
 const signedInUser = props.signedInUser
 const uniqueServiceTypes = props.uniqueServiceTypes
 const setJobPostings = props.setJobPostings
 const fHistory = props.fHistory
 const clients = props.clients
const [showCompleted, setShowCompleted] = useState(true)
const [showOffers, setShowOffers] = useState(false)
return(
    <div>
    <img src = {user.freelancer.img}></img>
    <h1>{user.freelancer.name}</h1>
    <p>Average Rating: {user.freelancer.average_rating}</p>
    <button onClick={() => setShowOfferJob(true)}>Offer Job</button>

    {
        offerJob ? (
            <OfferJob direct={setShowOffers} show = {setShowOfferJob} offer={user.freelancer.id} jobs = {jobPostings} setJobs = {setJobPostings} user = {signedInUser} type = {uniqueServiceTypes} />
        ): null
    }
    <ul>Contact Details: 
        <li>{user.freelancer.email}</li>
        <li>{user.freelancer.contact}</li>
    </ul>

    <p>Rates: {user.freelancer.rates}</p>
    
    <p>Location {user.freelancer.location}</p>

    <h3>Service type: </h3>
    
    {user.freelancer.service_type.map((type) =>{
                return(<ul>
                    <li>{type}</li>
                </ul>)
            })}

    <h3>Usual Availability: </h3>
    
        {user.freelancer.usual_availability.map((avl) =>{
                return(<ul>
                    <li>{avl}</li>
                </ul>)
            })}
    
    <button onClick={() =>  {
        setShowOffers(false)
        setShowCompleted(true)}}>Completed Jobs</button>
     <button onClick={() => {
       setShowCompleted(false) 
        setShowOffers(true)}}>Direct offers</button>
    {/* FreelancerCompleted.js */}
    {
        showCompleted ? (<FreelancerCompleted setJobPostings = {setJobPostings} jobPostings = {jobPostings} clients={clients} fHistory = {fHistory}/>) : null
    }
   
    {/* DirectOffer.js */}
    {
        showOffers ? (<DirectOffer show={setShowOffers} setJobPostings = {setJobPostings} jobPostings = {jobPostings} userId = {user.freelancer.id} clients = {clients}/>) : null
    }
    
    </div>
)
}

export default FreelancerProfile