import { useState} from "react";

import { useOutletContext,  useNavigate} from "react-router-dom";

function Post (props) 
{
    const setShow = props.show 
    const jobs = props.jobs 
    const setJobs = props.setJobs 
    const largestId = jobs.reduce((maxId, jobs) => Math.max(maxId, jobs.id), 0);
    const user = props.user
    const uniqueServiceTypes = props.type
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [type, setType] = useState([])
    const [difficulty, setDifficulty] = useState("")
    const [requirements, setRequirements] = useState([])
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("")
    const difficultyChoice = ["easy", "medium", "hard"]

    const navigate = useNavigate();
    const handleSubmit = async(event, navigate) => {
        event.preventDefault();

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        const newJob = {
            id : largestId + 1,
            title : title,
            details : details,
            type: type,
            clientId: user,
            difficulty: difficulty,
            requirements: requirements,
            date: date, 
            date_posted: today,
            location: location, 
            forOffering: true,
            completed: false
        }
        setJobs([...jobs, newJob])
        setTitle("")
        setDetails("")
        setType([])
        setDifficulty("")
        setRequirements("")
        setDate("")
        setLocation("")
        setShow(false)
        navigate('/jobs')
    }

    const handleCancel = () => {
        setShow(false)
    }

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setType((prevType) =>
          prevType.includes(value)
            ? prevType.filter((type) => type !== value)
            : [...prevType, value]
        );
      };

      const handleDifficultyChange = (e) => {
        setDifficulty(e.target.value);
      };
    return (
        <div>
            <h1>Post a Job</h1>
            <form onSubmit={e => handleSubmit(e, navigate)}>
                <div>
                    <label>Title:</label>
                    <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    <label>Details:</label>
                    <textarea
                    type="textarea"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    > </textarea>
                </div>

                <div>
                    <label>Job Type(s): </label>
                    {uniqueServiceTypes.map((type, index) => (
                      <div key={index}>
                        <input
                          type="checkbox"
                          value={type}
                          onChange={handleCheckboxChange}
                        />
                        <label className="font-semibold mr-4">
                          {type}
                        </label>
                      </div>
                    ))}
                </div>

            <div className=" text-xl pb-4">
              <label className="font-bold mr-4">Difficulty: </label>
              <select
                value={difficulty}
                className="border py-1 border-sky-950 rounded-full "
                onChange={handleDifficultyChange}
              >
                <option value="" disabled>
                  Select a difficulty
                </option>
                {difficultyChoice.map((diff, index) => (
                  <option key={index} value={diff}>
                    {diff}
                  </option>
                ))}
              </select>
            </div>

                <div>
                    <label>Requirements: </label>
                    <input
                    type="text"
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    />
                </div>

                <div>
                    <label>Date of Job: </label>
                    <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div>
                    <label>Location: </label>
                    <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    />
                </div>

                <button type="submit">Submit post</button>
                <button onClick={() => handleCancel()}> Cancel</button>
            </form>
        </div>
    )
}

export default Post