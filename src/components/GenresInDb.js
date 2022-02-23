import React, { Component } from "react";
import Genre from "./Genre";


class GenresInDb extends Component {
    constructor(){
        super()
        this.state = {

            genresList : []

        }
    }

    componentDidMount(){

        fetch("http://localhost:3000/api/genres")
        
        .then(res=>res.json())
        
        .then(genres =>{
            console.log(genres)
            this.setState({genresList: genres.data})
        })
        .catch(error => console.log(error))

    }


render () {

    return (
             
        <>
             
        <div className="col-lg-6 mb-4">						
					<div className="card shadow mb-4">
							<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800"> Genres in Date Base </h5>
                            </div>
                    <div className="row" style={{paddingTop: 26}}>

                            {
                            
                                this.state.genresList.map((genre, index)=> {

                                 return <Genre  {...genre} key = {index} />

                                })
                                             
                             }
                    </div>
                    </div>

                          
						
        </div>
        

        
        </>


    )

}
}



export default GenresInDb