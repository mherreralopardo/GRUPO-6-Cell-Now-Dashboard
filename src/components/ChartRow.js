import React from 'react';


function ChartRow(props){

  

    return (
                <tr>
                    <td>{props.title}</td>
                    <td>{props.length}</td>
                    <td>{props.rating}</td>
                    <td>{props.genre} </td>
                    <td>{props.awards}</td>
                </tr>
            )
    }
    
        

export default ChartRow;