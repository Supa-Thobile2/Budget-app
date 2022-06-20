import './App.css';//style that is being applied to app.js which is imported from an external css file (App.css)
import AddItems from './components/additem'//function that add items which is imported from an external javascript file (additem.js) 


import React, {useState} from 'react'//defining a use state which is imported from react witha a hook {useState}
import DisplayTransaction from './components/DisplayTransaction';//function that displays transactions which is imported from an external javascript file (DisplayTransaction.js) 
function App() {


  const [transaction, setTransaction] = useState([]);//defining a use state

//addTransaction function
 // variable addTransaction is passed a method that adds and set transaction for the use state defined above
  const addTransaction = ((amount, item, transactionType)=>{

    setTransaction((item)=>[...item, {
      amount:amount,
      item:item,
      transactionType:transactionType
    }])
  });//end of the function

  //This is what is returned by the function App()
      //Adde a class in order to add styling 
      //addTransaction is passed as prop to AddItems
  return (
    <div className="Container">
        <DisplayTransaction list= {transaction}/>
        <AddItems  add= {addTransaction}/> 
        
        
    </div>
  );
}

export default App;
