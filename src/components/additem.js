import React, {useState} from "react";
import "../css/add.css"
function AddItems (props){
    const [amount, setAmount] = useState ('')
    const [item, setItem] = useState ("")
    const [transactionType, settransactiontype] = useState ("")
    const add = (()=>{

        props.add (amount, item, transactionType);

    })
    return (
        <div>
            <input placeholder="Enter item"/><br/><br/>
            <input placeholder="Enter amount"/><br/><br/>
            <select>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select><br/><br/>
            <button id="btn" onClick={add}>Add</button>
        </div>
    )
}

export default AddItems;