import React from "react"
import '../css/DisplayTransaction.css'
function DisplayTransaction(props){
    return(
        <div>

              {props.list.map((item)=>(
                  <div>
                      {item.transactionType == "Expense" ? (<div className="transaction-item">
                            <div>
                                <h4 style={{paddindLeft:'12px', paddingTop:'25px'}}>{item.amount}</h4>
                            </div>
                            <div>
                                <h4 style={{paddindLeft:'290px', paddingTop:'25px'}}>{item.item}</h4>
                            </div>
                            <div>
                                <h4>{item.transactionType}</h4>
                            </div>
                            <div className="expense-line"></div>
                      </div>):
                      (
                        <div className="transaction-item">
                        <div>
                            <h4 style={{paddindLeft:'12px', paddingTop:'25px'}}>{item.amount}</h4>
                        </div>
                        <div>
                            <h4 style={{paddindLeft:'290px', paddingTop:'25px'}}>{item.item}</h4>
                        </div>
                        <div>
                            <h4>{item.transactionType}</h4>
                        </div>
                        <div className="income-line"></div>
                  </div>
                      )}
                      
                    
                  </div>
                  
              ))}
        </div>
      
    )
}

export default DisplayTransaction
