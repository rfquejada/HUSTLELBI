
import { useEffect, useState } from "react";
function ClientCompleted (props) 
{
    const history = props.clientJobs
    const freelancers = props.freelancers

    return(
        <div>
            {
                history.map((job) =>{
                    const freelancer = freelancers.find(freelancer => freelancer.id === job.freelancerId);
                   return (<div> 
                        <h1>Title: {job.title}</h1>
                        <h3>Freelancer: {freelancer.name}</h3>
                        <h3>Freelancer Rating: {job.ratingFree}</h3>
                        {job.FreelancerReview ? (<>
                        <h3>Freelancer's review: </h3>
                        <p>{job.FreelancerReview}</p>
                        </>):(<p>Awaiting freelancer's review to client</p>)}   
                    </div>)
                })
            }
        </div>
    )
}

export default ClientCompleted