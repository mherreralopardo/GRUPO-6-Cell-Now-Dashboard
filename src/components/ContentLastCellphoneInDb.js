import React, {Component} from "react"
import LastCellphoneInDb from "./LastCellphoneInDb"
    
class ContentLastProductInDb extends Component {
    constructor(){
        super()
        this.state = {

        productsList : [],
        userList: []

        }
    }


componentDidMount(){

    Promise.all([
        fetch('http://localhost:3030/api/product/'),
        fetch('http://localhost:3030/api/user/')
    ])

    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))   
    
    .then(([data1, data2]) => {
        
        this.setState({
        productsList: data1, 
        userList: data2
        })
    console.log(productsList)
    console.log(userList);
    })
    .catch(error => console.log(error))
    }
    
    render(){

 let id = productsList.length;

    let prodProps = {
    img : productsList.description[id],
    name : "productsList.name[id]",
    description : "productsList.description[id]",  
    view : "http://localhost:3030/product/detail/"+id
    }

    return (

        <div className="row">

        {prodProps.map( (movie, i) => {

            return <LastCellphoneInDb {...movie} key={i}/>

        })}

        </div>
    )}
  
}

export default ContentLastProductInDb; 