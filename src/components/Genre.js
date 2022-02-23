import React from "react";
import {Link} from 'react-router-dom'


function Genre(props) {

    return (
        <>
        
        <div className="col-lg-6 mb-4">
		    <div className="card bg-dark text-white shadow" style={{marginLeft: 8, marginRight: 8,}}>
			 <div className="card-body">
            <Link to={`/categories/${props.id}`} style={{color:"white", textDecoration: 'none'}}>
					{props.name}		
             </Link>					
			 </div>
			</div>
        </div>
        


        </>

    )




}

export default Genre;