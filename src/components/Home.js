import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => { 
 

    return ( 

        <div className="container">
            <img src="https://cdn.pixabay.com/photo/2016/03/27/16/23/woman-1283009_1280.jpg" className="img-fluid" alt="painting"/>
            <div className="jumbotron">
                <h1 >Welcome to Art Explorer!</h1><br></br>
                <Link to={`/paintings`}><button type="button" className="btn btn-primary btn-lg">Let's Begin</button></Link>
             </div> 
        </div>
    )
}

export default Home  