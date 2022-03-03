import React from "react";
import {Link} from 'react-router-dom'




function Genre(props) {

    return (
        <>
        
        <div className="col-lg-6 mb-4">
		    <div className="card bg-dark text-white shadow" style={{marginLeft: 10, marginRight: 8,}}>
			 <div className="card-body">
					{props.name}		
             					
			 </div>
			</div>
        </div>
        


        </>

    )




}

export default Genre;