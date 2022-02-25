import React from "react";
import { Link } from 'react-router-dom';

function switchMark(name){
    console.log("switch Mark ", name);
    return name;
}
  
function Genre(props) {

    return (
        <>

            <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow" style={{ marginLeft: 8, marginRight: 8, }}>
                    <div className="card-body">
                        <Link to={`/categories/${props.markId}`} style={{ color: "white", textDecoration: 'none' }}>
                            {props.markId + " " + switchMark(props.totalMark)
                            }
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Genre;