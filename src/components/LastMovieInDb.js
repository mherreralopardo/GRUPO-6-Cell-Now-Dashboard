import React,{ useState, useEffect, useRef }  from "react"
import axios from "axios"
import imagenFondo from '../assets/images/1644341561852_img.jpg'


function LastProductInDb(){

	const [products, setProducts] = useState([]);

	useEffect(()=> {
		console.log ("Se montó el componente")
		axios.get('http://localhost:3002/data/product')
  .then(function (response) {
    setProducts(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

	},[])

return(
     <>{
		products.length > 0 && products.map((product, i) => {
			return (
               
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último producto de Cellnow</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										{/* <span>{product[i].name}</span> NOMBRE DEL PRODUCTO*/}
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 10 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
									</div>
									{/* <p>DESCRIPCIÓN DEL</p> */}
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Detalle del producto</a>
								</div>
							</div>
                        </div>
						)
					})
				}
			
    </>
)
}

export default LastProductInDb;