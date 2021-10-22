import React from "react";

const Totals = ({content}) => {
    const total = content.reduce((acc, item) => acc + item.exercises, 0);



    return (
        <div>
            <h5>Total of {total} exercises in this course</h5>
        </div>
    )
}

export default Totals;