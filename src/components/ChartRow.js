import React from 'react';

function ChartRow(props){

    return (
        <tr>
            <td>{props.model}</td>
            <td>{props.price}</td>
            <td>{props.discount}</td>
            <td>{props.description} </td>
            <td>{props.camera}</td>
            <td>{props.screen} </td>
            <td>{props.memory}</td>
            <td><img style={{ width: 50 + 'px' }} src={"http://localhost:3002/img/products/"+props.image}/></td>
        </tr>
    )
}


export default ChartRow;