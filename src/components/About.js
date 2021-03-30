import React from 'react';

const About = () => { 

    return ( 
        
       <div className="container">
        <div className="jumbotron">
        <h3>Art Explorer was built using the Harvard Art Museum API</h3><br></br>
        <h2>Testing</h2>
        <h4> Check out the API documentation <a href={"https://harvardartmuseums.org/collections/api"}> here</a></h4>
        </div>
        <img src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/J8-MJEVkE3smn0QYowre_TQcrjE=/600x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/ICV4XBS7XUI6JKEJ355RY3TR2E.jpg" alt="museum"/>
       </div>
    )
}

export default About  