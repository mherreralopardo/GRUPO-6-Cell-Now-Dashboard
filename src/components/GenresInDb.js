// import React, { Component } from "react";
// import Genre from "./Genre";
// import axios from "axios"


// class GenresInDb extends Component {
//     constructor(){
//         super()
//         this.state = {
//             totalmarksList : []
//         }
//     }
//     componentDidMount(){

//         fetch("http://localhost:3002/data/mark/totalMarks")
        
//         .then(res=>res.json())
        
//         .then(totalMark =>{
            
//             this.setState({totalmarksList: totalMark.data})
//            alert (console.log("algo", totalMark))
//         })
//         .catch(error => console.log(error))

//         // fetch("http://localhost:3002/data/mark/totalMarks")
        
//         // .then(res=>res.json())
        
//         // .then(marks =>{
//         //     console.log(marks)
//         //     this.setState({marksList: marks.data})
//         // })
//         // .catch(error => console.log(error))
//     }

// render () {

//     return (       
//         <>        
//         <div className="col-lg-6 mb-4">						
// 			<div className="card shadow mb-4">
// 				<div className="card-header py-3">
// 					<h5 className="m-0 font-weight-bold text-gray-800"> ¿Qué marcas comprar en Cellnow? </h5>
//                 </div>
//                     <div className="row" style={{paddingTop: 26}}>
//                     {
//                         this.state.totalmarksList.map((totalMark, index)=> {
//                             return <Genre  {...totalMark} key = {index} />
//                         })
//                     }
//                     </div>
//             </div>			
//         </div>     
//         </>
//     )
// }
// }
// export default GenresInDb