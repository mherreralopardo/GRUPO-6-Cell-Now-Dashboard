import React, { Component } from "react";
import SmallCard from "./SmallCard"
    
// class ContentoTop extends Component {
//     constructor(){
//         super()
//         this.state = {

//             usersList : []

//         }
//     }


// fetch("http://localhost:3002/data/user")
        
//         .then(res=>res.json())
        
//         .then(users =>{
//             console.log(users)
//         })
//         .catch(error => console.log(error))


// let usersInDb = {

//     title: 'Usuarios en la base de datos',
//     color: 'primary',
//     icon: 'fa-solid fa-users',
//     quantity: users.length
// }

// let totalProducts = {

//     title: 'Celulares',
//     color: 'success',
//     icon: 'fa-solid fa-mobile-screen',
//     quantity: 79
// }

// let actorsQuantity = {
//     title: 'Categorías',
//     color: 'warning',
//     icon: 'fa-solid fa-mobile-screen',
//     quantity: 49
// }


// let cartProps = [usersInDb, totalProducts, actorsQuantity]




// function ContentRowCellphone () {


//     return (

//         <div className="row">

//         {cartProps.map( (movie, i) => {

//             return <SmallCard {...movie} key={i}/>

//         })}

//         </div>
  

    

//     )
// }



const usersInDb = {

    title: 'Usuarios en la base de datos',
    color: 'primary',
    icon: 'fa-solid fa-users',
    quantity: 12
}

const totalProducts = {

    title: 'Celulares',
    color: 'success',
    icon: 'fa-solid fa-mobile',
    quantity: 79
}

const actorsQuantity = {
    title: 'Categorías',
    color: 'warning',
    icon: 'fa-solid fa-chart-bar',
    quantity: 12
}

const cartProps = [usersInDb, totalProducts, actorsQuantity]


class ContentRowCellphone extends Component {
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
            this.setState({usersList: users.data})
        })
        .catch(error => console.log(error))

        // fetch("http://localhost:3002/data/mark/totalMarks")
        
        // .then(res=>res.json())
        
        // .then(marks =>{
        //     console.log(marks)
        //     this.setState({marksList: marks.data})
        // })
        // .catch(error => console.log(error))


    }


render () {

    return (

        <div className="row">

        {cartProps.map( (movie, i) => {

            return <SmallCard {...movie} key={i}/>
        })
        
        }

        </div>

    )
}

}


export default ContentRowCellphone; 