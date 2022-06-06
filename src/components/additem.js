import "../css/add.css"
function AddItems (){
    return (
        <div>
            <input placeholder="Enter item"/>
            <input placeholder="Enter amount"/>
            <select>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
            <button>Add</button>
        </div>
    )
}

export default AddItems;