import React from "react"
import SmallCard from "./SmallCard"
    



let usersInDb = {

    title: 'Usuarios en la base de datos',
    color: 'primary',
    icon: 'fa-solid fa-users',
    quantity: 222221

}

let totalProducts = {

    title: 'Celulares',
    color: 'success',
    icon: 'fa-solid fa-mobile-screen',
    quantity: 79
}

let actorsQuantity = {
    title: 'Categorías',
    color: 'warning',
    icon: '<FontAwesomeIcon icon="fa-solid fa-mobile-screen',
    quantity: 49
}


let cartProps = [usersInDb, totalProducts, actorsQuantity]




function ContentRowMovies () {


    return (

        <div className="row">

        {cartProps.map( (movie, i) => {

            return <SmallCard {...movie} key={i}/>

        })}

        </div>
  

    

    )
}

export default ContentRowMovies; 