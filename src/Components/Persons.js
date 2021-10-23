import React from "react";
import PersonItem from "./PersonItem";

const Persons =({people}) => {

    const nameElements = people.map(p => {
        return <PersonItem name={p.name} number={p.number} />
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