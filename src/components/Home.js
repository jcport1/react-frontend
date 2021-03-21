import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => { 
 

    return ( 

        <div>
            <h1>Welcome to Art Explorer!</h1>
            <Link to={`/paintings`}><button>Let's Begin</button></Link>
        </div>
    )
}

export default Home  