import React from "react";


const Form= ({newName, newNum, setNewName, setNewNum, handleSubmit}) => {
    return(
        <div>
            <h2>Add new Name</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
                    number: <input value={newNum} onChange={(e) => setNewNum(e.target.value)}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
      
    )
}

export default Form;