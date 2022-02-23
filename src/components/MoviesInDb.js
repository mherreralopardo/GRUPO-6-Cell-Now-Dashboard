import React, { Component } from "react";
import ChartRow from './ChartRow';

class MoviesInDb extends Component {
    constructor(){
        super()
        this.state = {

           moviesList : []

        }
    }



    componentDidMount(){

        fetch("http://localhost:3000/api/movies")
        
        .then(res=>res.json())
        
        .then(movies =>{
            console.log(movies)
            this.setState({moviesList: movies.data})
        })
        .catch(error => console.log(error))

    }


    render () {

        return (
  
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Duración</th>
                                <th>Rating</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </thead>
                       
                        <tbody>
                    {

                        this.state.moviesList.map((movie, index)=> {


                            return <ChartRow  {...movie} key = {index} />


                        })

                    }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
}

export default MoviesInDb;