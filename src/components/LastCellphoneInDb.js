
import React, { Component } from "react"

class LastCellphoneInDb extends Component {
    constructor() {
        super()
        this.state = {

            cellphoneList: []

        }
    }
componentDidMount() {
	
	fetch('http://localhost:3002/data/product/56')
	.then((res) => res.json())
	.then(cellPhone =>{
			console.log(cellPhone)
		this.setState({cellphoneList: cellPhone.data})
	})
	.catch(error => console.log(error))
	console.log(this.state.cellphoneList)
}


render() {
	
	return (
		<>

			<div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h5 className="m-0 font-weight-bold text-gray-800">Lo último de Cellnow: {this.state.cellphoneList.model}</h5>
					</div>
					<div className="card-body">
						<div className="text-center">
								<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 300 + 'px' }} src={"http://localhost:3002/img/products/"+this.state.cellphoneList.image} alt={this.state.cellphoneList.name} />
							</div>
						<p>{this.state.cellphoneList.description}</p>
						<a className="btn btn-danger" target="_blank" rel="nofollow" href={"http://localhost:3002/product/detail/"+this.state.cellphoneList.id} >Detalle del producto</a>
					</div>
				</div>
			</div>

		</>
	)
}
}

export default LastCellphoneInDb