import React from "react";
import Content from "./Content";
import Header from "./Header";
import Totals from "./Totals";

const Course = ({course}) => {


    return(
        <div>
            <Header title={course.name}/>
            <Content content={course.parts}/>
            <Totals content={course.parts}/>
        </div>
    )
}

export default Course;