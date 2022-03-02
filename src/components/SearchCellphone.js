import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import noPoster from '../assets/images/no-poster.jpg';

function SearchCellphone(){

	const ElInput = useRef();


	const [products, setProducts] = useState([]);

	useEffect(()=> {
		console.log ("Se montó el componente")
		axios.get('http://localhost:3000/api/data/product')
  .then(function (response) {
    setProducts(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

	},[])

	// useEffect(()=> {
	// 	console.log ("Se actualizó el componente")

	// },[movies])

	// const movies = [
	// 	{
	// 		"Title": "Parchís",
	// 		"Year": "1983",
	// 		"Poster": "https://m.media-amazon.com/images/M/MV5BYTgxNjg2MTAtYjhmYS00NjQwLTk1YTMtNmZmOTMyNTAwZWUwXkEyXkFqcGdeQXVyMTY5MDE5NA@@._V1_SX300.jpg"
	// 	},
	// 	{
	// 		"Title": "Brigada en acción",
	// 		"Year": "1977",
	// 		"Poster": "N/A"
	// 	},
	// ];

	// const keyword = 'PELÍCULA DEMO';

	// // Credenciales de API
	// const apiKey = '4cf1ab5e'; // Intenta poner cualquier cosa antes para probar



	return(
		<div className="container-fluid">
			
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET">
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input type="text" className="form-control" />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Películas para la palabra: </h2>
						</div>
						{/* Listado de películas */}
						{
							products.length > 0 && products.map((product, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{product.model}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={product.image}
														alt={product.model} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{product.price}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ products.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
		</div>
	)
}

export default SearchCellphone;
