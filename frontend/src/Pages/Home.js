import { Link, useOutletContext } from "react-router-dom"

function Home ()
{
    const {freelancers, clients} = useOutletContext()
    return (
        <div>

            <div>
                <ul>
                    <li><Link to="/">Available Freelancers</Link></li>
                    <li><Link to="/jobs">Active Job Listings</Link></li>
                    
                </ul>
                
            </div>
            {freelancers.map((user) =>{
                return(
                    <div>
                        <img src = {user.img}></img>
                        <h1>{user.name}</h1>
                        <h5>Rate: PHP {user.rates}</h5>
                        <h5>Average Rating: {user.average_rating}</h5>
                        <p>Service type: {user.service_type.map((type) =>{
                            return(<ul>
                                <li>{type}</li>
                            </ul>)
                        })}</p>
                        <p>Usual Availability: {user.usual_availability.map((avl) =>{
                            return(<ul>
                                <li>{avl}</li>
                            </ul>)
                        })}</p>
                        <Link to={`/profile/${user.id}`}><button >Hire me! </button></Link>
                    </div>
                )
            })}

            
        </div>
    )

}

export default Home