import { useNavigate } from "react-router-dom"

function CheckOffers (props) {
    const jobPostings = props.jobPostings 
    const setJobPostings = props.setJobPostings
    const freelancers = props.freelancers
    const job = props.job 
    const show = props.show
    const navigate = useNavigate()
    const handleCancel = () =>{
        show(null)
    }

    const handleAccept = (of) => 
    {
        let i = 0
        for (let j = 0; j < jobPostings.length; j++) {
            if (jobPostings[j].id === job.id) {
                i = j
                break;
            }
        }

        setJobPostings((currentJobList) =>{
            const updateList = [...currentJobList]
            updateList[i] = {...updateList[i],freelancerId: of.freelancerId, rate: of.rate}
            updateList[i].offerTo = false 
            return updateList
        })

        navigate('/')

    }
    return(
        <div>
            <h1>{job.title}</h1>
            <p>Date Posted: {job.date_posted}</p>
            <h2>Offers: </h2>
            {
                job.offers.map((of) => {
                    const freelancer = freelancers.find(fl => fl.id === of.freelancerId);
                    return(
                        <div>
                            <h3>{freelancer.name}</h3>
                            <h4>Rate offered: {of.rate}</h4>
                            <p>Message: {of.message}</p>

                            <button onClick={() => handleAccept(of)}>Accept</button>
                        </div>
                    )
                })
            }

            <button onClick={() => handleCancel()}> Cancel </button>
        </div>
    )
}

export default CheckOffers