import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => { 
 

    return ( 

        <div className="container">
        <div className="jumbotron">
            <h1 >Welcome to Art Explorer!</h1><br></br>
            <Link to={`/paintings`}><button type="button" className="btn btn-primary btn-lg">Let's Begin</button></Link>
        </div>   
        </div>
    )
}

export default Home  