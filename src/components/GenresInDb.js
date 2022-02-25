import React, { Component } from "react";
import Genre from "./Genre";
import axios from "axios";
const apiProduct = "http://localhost:3002/data/product";
const apiTotalMarks = "http://localhost:3002/data/mark/totalMarks"

class GenresInDb extends Component {
    constructor(){
        super()
        this.state = {

            productList : [],
            totalMarksList : []

        }
    }



    async componentDidMount(){

        try {
            let [products, totalMark] = await Promise.all([
              axios.get(apiProduct),
              axios.get(apiTotalMarks),
            ]);
            alert(JSON.stringify({totalMarkList: totalMark.data})); 
            this.setState({productList: products.data.data, totalMarkList: totalMark.data})
          }
          catch(err) {
            console.log(err);
          };
    }

render () {

    return (
             
        <>
             
        <div className="col-lg-6 mb-4">						
					<div className="card shadow mb-4">
							<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800"> ¿Qué marcas comprar en Cellnow? </h5>
                            </div>
                    <div className="row" style={{paddingTop: 26}}>
                  
                            {
                                this.state.productList.map((product, index)=> {
                                 return <Genre markId={product.markId} totalMark={this.state.totalMarksList} key={index} />
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