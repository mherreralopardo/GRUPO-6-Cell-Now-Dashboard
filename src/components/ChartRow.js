import React from 'react';


function ChartRow(props){

  

    return (
                <tr>
                    <td>{props.firstName}</td>
                    <td>{props.lastName}</td>
                    <td>{props.email}</td>
                    <td>{props.userCategory} </td>
                    <td>{props.avatar}</td>
                </tr>
            )
    }
    
        

export default ChartRow;