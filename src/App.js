import './App.css'
import React, {useState} from 'react'

import Home from './components/home'
import Login from './components/login'
import SignUp from './components/signup'
import {BrowserRouter as Router , Switch , Route} from 'react'


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
    <Router>
      <Switch>
        <Route path="/" component={Login}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
        <Route path="/home"></Route>
      </Switch>
      <Home list = {transaction} add = {addTransaction}/>
    </Router>
    
  );
}

export default App;
