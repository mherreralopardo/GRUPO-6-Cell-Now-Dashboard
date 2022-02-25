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
            <td>{props.image} </td>
        </tr>
    )
}

export default ChartRow;