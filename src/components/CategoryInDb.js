import React, { Component } from "react";
import Genre from "./Genre";
import axios from "axios"
import CategoriesDetail from "./CategoriesDetail";


class CategoryInDb extends Component {
    constructor(){
        super()
        this.state = {
            marksList : [],
            totalMarksList : []
        }
    }
    componentDidMount(){
        fetch("http://localhost:3002/data/mark")
        
        .then(res=>res.json())
        
        .then(marks =>{
            console.log(marks)
            this.setState({marksList: marks.data})
        })
        .catch(error => console.log(error))

        fetch("http://localhost:3002/data/mark/totalMarks")
        
        .then(res=>res.json())
        
        .then(totalMarks =>{
            console.log(totalMarks)
            this.setState({totalMarksList: totalMarks})
        })
        .catch(error => console.log(error))
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
                            
                                this.state.marksList.map((mark, index)=> {

                                 return <Genre  {...mark} key = {index} />

                                })
                                             
                             }
                    </div>
                    </div>

                          
						
        </div>
        

        
        </>


    )

}
}



export default CategoryInDb