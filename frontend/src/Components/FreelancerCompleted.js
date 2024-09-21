import { useState } from "react"
import WriteReview from "./WriteReview"
function FreelancerCompleted (props) 
{
    const jobPostings = props.jobPostings
    const setJobPostings = props.setJobPostings
    const clients = props.clients
    const fHistory = props.fHistory
    const [showWrite, setShowWriteReview] = useState(null)
    return(
        <div>
            {fHistory.map((job) => {
                const client = clients.find(client => client.id === job.clientId);
                return(
                    <div> 

                        <h1>Title: {job.title}</h1>
                        <h5>Client: {client ? client.name: "Unregisterd"}</h5>
                        <h3>Client Rating: {job.ratingClient}</h3>
                        <h3>Client Review: </h3>
                        <p>{job.ClientReview}</p>
                        {
                            !job.FreelancerReview ? (
                            <div>
                                <h5>Notice: You have not reviewed your client for this job.</h5>
                                <button onClick={() => setShowWriteReview(job.id)}>Review client</button>               
                                {showWrite === job.id ? (<WriteReview show = {setShowWriteReview} jobPostings={jobPostings} setJobPostings = {setJobPostings}  job={job}/>):null}                    
                            </div>  
                            ): null
                        }
                    </div>
                    
                )
            })}
        </div>
    )
}

export default FreelancerCompleted