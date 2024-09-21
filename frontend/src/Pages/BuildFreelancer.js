import { useEffect, useState } from "react";

import { useOutletContext,  useNavigate} from "react-router-dom";

function BuildFreelancer ()
{
    const {freelancers, setFreelancers} = useOutletContext();
    const [img, setImage] = useState("");
    const [age, setAge] = useState(0);
    const [rate, setRate] = useState(0);
    const [location, setLocation] = useState("");
    const [service_type, setServiceType] = useState([]);
    const [avail, setAvail] = useState([]);
    const uniqueServiceTypes = [...new Set(freelancers.flatMap(freelancer => freelancer.service_type))];
    const availChoices = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const largestId = freelancers.reduce((maxId, freelancer) => Math.max(maxId, freelancer.id), 0);
    const navigate = useNavigate();
    const handleAvailChange = (event) =>{
        const value = event.target.value;
        setAvail((prevAvail) =>
          prevAvail.includes(value)
            ? prevAvail.filter((type) => type !== value)
            : [...prevAvail, value]
        );
    }
    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setServiceType((prevType) =>
          prevType.includes(value)
            ? prevType.filter((type) => type !== value)
            : [...prevType, value]
        );
      };


    const handleSubmit = async (event, navigate) => {
        event.preventDefault();
        setFreelancers((currentFreelancers) => {
          const updateList = [...currentFreelancers]
          updateList[largestId-1] = {...updateList[largestId-1], 
            img: img,
            average_rating: 0, 
            age: age,
            rates: rate,
            location: location,
            service_type: service_type,
            usual_availability: avail,}
          console.log(updateList)
          return updateList
        })
        setImage("")
        setAge(0)
        setRate(0)
        setLocation("")
        setServiceType([])
        setAvail([])
        navigate('/')
    }
    return(
        <div>
            <h1>Build your freelancer profile</h1>

            <form onSubmit={e => handleSubmit(e, navigate)}>
                <div>
                    <label>Image URL:</label>
                    <input
                    type="text"
                    value={img}
                    onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                

                <div>
                    <label>Age</label>
                    <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    />
                </div>

                <div>
                    <label>Rate per hour:</label>
                    <input
                    type="number"
                    value={rate}
                    placeholder="PHP xxx /hour"
                    onChange={(e) => setRate(e.target.value)}
                    />
                </div>

                <div>
                    <label>Location</label>
                    <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    />
                </div>

                <div>
                    <label>Service Type(s): </label>
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
                <div>
                    <label>Availability: </label>
                    {availChoices.map((type, index) => (
                      <div key={index}>
                        <input
                          type="checkbox"
                          value={type}
                          onChange={handleAvailChange}
                        />
                        <label className="font-semibold mr-4">
                          {type}
                        </label>
                      </div>
                    ))}
                </div>


                <button type="submit">
                Create Account
              </button>

            </form>
        </div>
    )
}

export default BuildFreelancer