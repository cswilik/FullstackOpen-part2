import React from "react";
import Part from "./Part";



const Content = ({content}) => {



    const partElements = content.map(part => {
        return <Part key={part.id} name={part.name} exercises={part.exercises}/>
    })
    return (
        <div>
            {partElements}
        </div>

    )
}

export default Content;