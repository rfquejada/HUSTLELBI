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
            updateList[i] = {...updateList[i],freelancerId: of.freelancerId}
            updateList[i].offerTo = false 
            return updateList
        })

        navigate('/')

    }
    return(
        <div className="mt-4 flex flex-col space-y-1  ">
            <h1  className="text-2xl font-bold">{job.title}</h1>
            <p className="text-sm text-yellow-100">Date Posted: {job.date_posted}</p>
            <h2 className="text-yellow-200">Offers: </h2>
            <div className="overflow-y-auto h-[200px] flex flex-row" > {/* Set a fixed height and overflow */}
            {
                job.offers.map((of) => {
                    const freelancer = freelancers.find(fl => fl.id === of.freelancerId);
                    return(
                        <div  className="mb-4 p-5 rounded-xl m-4" // Added mb-
                        style={{ backgroundColor: '#2e2d2d' }} 
                        key={job.id}>
                            <div className="flex space-x-4 ">
                                <div className="flex-grow text-yellow-400 ">
                                    <h3 className="text-sm text-yellow-100">{freelancer.name}</h3>
                                    <h4 className="text-sm text-yellow-100">Rate offered: {of.rate}</h4>
                                    <p className="text-sm text-yellow-100">Message: {of.message}</p>
                                    <div className="space-x-5 space-y-5">
                                        <button onClick={() => handleAccept(of)}className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 px-4 rounded-md mt-5">Accept</button>
                                        <button onClick={() => handleCancel()} className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 px-4 rounded-md mt-5"> Cancel </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </div>
        </div>
    )
}

export default CheckOffers