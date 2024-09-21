import { useState } from "react"
import { useNavigate } from "react-router-dom"

function OfferService (props) 
{
    const job = props.job 
    const show = props.show
    const client = props.client
    const user = props.user 
    const jobPostings = props.jobPostings 
    const setJobPostings = props.setJobPostings

    const [rate, setRate] = useState(0)
    const[message, setMessage] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async (event, navigate) =>
    {
        event.preventDefault();
        let i = 0
        for (let j = 0; j < jobPostings.length; j++) {
            if (jobPostings[j].id === job.id) {
                i = j
                break;
            }
        }
        setJobPostings((currentJobList) =>{
            const updateList = [...currentJobList]
            const new_offer = {
                rate: rate, 
                message: message,
                freelancerId: user
            }
            if (updateList[i].offers){
                updateList[i].offers = [...updateList[i].offers, new_offer]
            }else{
                updateList[i] = {...updateList[i], offers: [new_offer]}
            }

            console.log(updateList)
            return updateList
        })

        setRate(0)
        setMessage("")
        navigate('/')
    }

    const handleCancel = () =>
    {
        show(null)
    }

    return(
        <div>
            <div>
                <h1>{job.title}</h1>
                <h3>Client: {client.name}</h3>

                {job.rate ? <h3>Rate per hour: {job.rate}</h3> : null}
                    <p>Date posted: {job.date_posted}</p>
                    <p>Date of job: {job.date}</p>
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
                    <p>{job.details}</p>
                    <p>Requirements: {job.requirements}</p>

            </div>

            <form onSubmit={e => handleSubmit(e, navigate)}>
             <div>
                    <label>Your offered rate (per hour):</label>
                    <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    />
                </div>

                <div>
                <label>Leave a message:</label>
                    <textarea
                    type="textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    > </textarea>
                </div>

                <button type="submit">Submit</button>
                <button onClick={() => handleCancel()}>Cancel</button>
            </form>
        </div>
    )
}

export default OfferService