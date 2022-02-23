import React from "react"
import imagenFondo from '../assets/images/1644341561852_img.jpg'


function LastProductInDb () {
return(
     <>
               
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último producto de Cellnow</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 10 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
									</div>
									<p>Cellnow te ofrece calidad en cada producto. Con el nuevo Samsung A20 FG Limited Edition podrás tomar las mejores fotos y recibirás la mejor calidad de imagen. Su pantalla de 16 pulgadas te dara la mejor experiencia de usuario</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Detalle del producto</a>
								</div>
							</div>
                        </div>
			
    </>
)
}

export default LastProductInDb;