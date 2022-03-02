import React, { Component } from "react";
import ChartRow from './ChartRow';

class CellphonesInDb extends Component {
    constructor(){
        super()
        this.state = {
           productsList : []
        }
    }
    componentDidMount(){

        fetch("http://localhost:3002/data/product")
        
        .then(res=>res.json())
        
        .then(products =>{
            console.log(products)
            this.setState({productsList: products.data})
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
                                <th>Modelo</th>
                                <th>Precio</th>
                                <th>Descuento</th>
                                <th>Descripción</th>
                                <th>Cámara</th>
                                <th>Pantalla</th>
                                <th>Memoria</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                    {
                        this.state.productsList.map((product, index)=> {
                            return <ChartRow  {...product} key = {index} />
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

export default CellphonesInDb;