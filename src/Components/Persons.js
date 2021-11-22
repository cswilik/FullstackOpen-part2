import React from "react";
import PersonItem from "./PersonItem";

const Persons =({people, handleRemovePerson}) => {

    const nameElements = people.map(p => {
        return <PersonItem key ={p.id} id ={p.id} name={p.name} number={p.number} handleRemovePerson={handleRemovePerson} />
      })
    return (
        <div>
            <ul>
                {nameElements}
            </ul>
        </div>
    )
}

export default Persons;