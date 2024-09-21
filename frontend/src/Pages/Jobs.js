import { Link, useOutletContext } from "react-router-dom"
import { useState } from "react";
import OfferService from "../Components/OfferService";
function Jobs ()
{
 const {jobPostings, clients, signedInUser, setJobPostings} = useOutletContext();
const [show, setShow] = useState(null)
 return (
    <div>
        <div>
            <ul>
                <li><Link to="/">Available Freelancers</Link></li>
                <li><Link to="/jobs">Active Job Listings</Link></li>  
            </ul>
                
        </div>
        {
            jobPostings.map((job) => {
                const client = clients.find(client => client.id === job.clientId);
                return(   
                     job.forOffering ? (<div> 
                        <h1>{job.title}</h1>
                        {job.rate ? <h3>Rate per hour: {job.rate}</h3> : null}
                        <p>Date posted: {job.date_posted}</p>
                        <p>Date of job: {job.date}</p>
                        <h5>Posted by: {client ? client.name: "Unregistered"}</h5>
                        <h5>Type(s): </h5>
                        {
                            job.type.map((t) => {
                                return(
                                    <ul>
                                        <li>{t}</li>
                                    </ul>
                                )
                            })
                        }
                        <h4>Difficulty: {job.difficulty}</h4>
                        
                        <p>Location: {job.location}</p> 
                        <button onClick={()=> setShow(job.id)} >Make an offer!</button>

                        {
                            show === job.id ? <OfferService client={client} job = {job} show= {setShow} user={signedInUser} jobPostings={jobPostings} setJobPostings={setJobPostings} />: null 
                        }
                    </div>): null

    
                )
            })


        }

       
    </div>
 )
}

export default Jobs