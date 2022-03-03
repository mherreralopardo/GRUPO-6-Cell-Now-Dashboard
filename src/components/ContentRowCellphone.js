import React, { Component } from "react";
import SmallCard from "./SmallCard"


class ContentRowCellphone extends Component {
    constructor() {
        super()
        this.state = {

            UserList: [],
            ProductList: [],
            MarkList: []

        }
    }

    componentDidMount() {

        Promise.all([
            fetch('http://localhost:3002/data/user'),
            fetch('http://localhost:3002/data/product'),
            fetch('http://localhost:3002/data/mark')
        ])

            .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))

            .then(([data1, data2, data3]) => this.setState({
                UserList: data1.data,
                ProductList: data2.data,
                MarkList: data3.data
            }))
            
            .catch(error => console.log(error))
    }

    render() {

    const usersInDb = {

        title: 'Usuarios en la base de datos',
        color: 'primary',
        icon: 'fa-solid fa-users',
        quantity: this.state.UserList.length
    }
    
    const totalProducts = {
    
        title: 'Celulares',
        color: 'success',
        icon: 'fa-solid fa-mobile',
        quantity: this.state.ProductList.length
    }
    
    const actorsQuantity = {
        title: 'Categorías',
        color: 'warning',
        icon: 'fa-solid fa-chart-bar',
        quantity: this.state.MarkList.length
    }
    
    const cartProps = [usersInDb, totalProducts, actorsQuantity]

        return (

            <div className="row">

                {cartProps.map((movie, i) => {

                    return <SmallCard {...movie} key={i} />

                })}

            </div>
        )
    }

}
export default ContentRowCellphone; 