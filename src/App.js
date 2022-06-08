import './App.css'
import React, {useState} from 'react'
import AddItems from './components/additem'
import DisplayTransaction from './components/DispalyTransaction'


function App() {

  const [transaction, setTransaction] = useState ([])

  const addTransaction = ((amount, item, transactionType)=>{
      setTransaction((item)=>[...item], {
        amount:amount,
        item:item,
        transactionType:transactionType
      })
      
  })

  
  return (
    <div className="Container">
        <DisplayTransaction list = {transaction}/>
        <AddItems  add = {addTransaction}/>
    </div>
  );
}

export default App;
