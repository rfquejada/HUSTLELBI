import ClientCompleted from '../Components/ClientCompleted'
import ClientOnProgress from '../Components/ClientOnProgress'
import Offerlist from '../Components/OfferList'

import { useState } from "react";
function ClientProfile (props) 
{
    const jobPostings = props.jobPostings
    const setJobPostings = props.setJobPostings
    const freelancers = props.freelancers
    const user = props.user 
    const cHistory = props.cHistory
    const [showCompleted, setShowCompleted] = useState(true)
    const [showInProgress, setInProgress] = useState(false)
    const [showAwaiting, setShowAwaiting] = useState(false)
    return(
        <div>
            <img src = {user.client.img}></img>
            <h1>{user.client.name}</h1>
            <p>Average Rating: {user.freelancer.average_rating}</p>
            <ul>Contact Details: 
                <li>{user.client.email}</li>
                <li>{user.client.contact}</li>
            </ul>

            
            <button onClick={ () =>
                {setShowCompleted(true)
                setInProgress(false)
                setShowAwaiting(false)}
            }>Completed Jobs</button>
            {/* ClientCompleted.js*/}

            <button onClick={ () =>
                {setShowCompleted(false)
                setInProgress(true)
                setShowAwaiting(false)}
            }>Jobs in Progress</button>
            {/* {ClientOnProgress.js} */}
            <button onClick={ () =>
                {setShowCompleted(false)
                setInProgress(false)
                setShowAwaiting(true)}
            }>Awaiting</button> 
            {/* Offerlist.js */}

            {showCompleted ? <ClientCompleted freelancers={freelancers} clientJobs = {cHistory}/>: null}

            {/* yung user dito dapat talaga signed in yan nilagay ko lang para madali mag-test muna*/}
            {showInProgress ? <ClientOnProgress user={user.client.id} freelancers={freelancers} jobPostings={jobPostings} setJobPostings = {setJobPostings} />: null}
            {showAwaiting ? <Offerlist  user={user.client.id} freelancers={freelancers} jobPostings={jobPostings} setJobPostings = {setJobPostings} />: null}


        </div>
    )
}

export default ClientProfile