import React, { Component } from "react";
import ChartRow from './ChartRow';

class MoviesInDb extends Component {
    constructor(){
        super()
        this.state = {

           usersList : []

        }
    }



    componentDidMount(){

        fetch("http://localhost:3002/data/user")
        
        .then(res=>res.json())
        
        .then(users =>{
            console.log(users)
            this.setState({moviesList: users.data})
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
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Categoria de usuario</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                       
                        <tbody>
                    {

                        this.state.usersList.map((user, index)=> {


                            return <ChartRow  {...user} key = {index} />


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