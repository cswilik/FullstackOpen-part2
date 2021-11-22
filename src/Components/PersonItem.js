import React from "react";


const PersonItem = ({id, name, number, handleRemovePerson}) => {

   
    return (
        <li>{name} : {number}<button onClick={() => handleRemovePerson(id, name)}>Remove</button></li>
    )
}

export default PersonItem;