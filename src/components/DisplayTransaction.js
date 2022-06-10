import React from "react"
import '../css/DisplayTransaction.css'
function DisplayTransaction(props){
    return(
        <div>
              {props.list.map((item)=>(
                  <div>
                      <div className="transaction-item">
                            <div>
                                <h4 style={{paddindLeft:'12px', paddingTop:'25px'}}>{item.amount}</h4>
                            </div>
                            <div><h4>{item.item}</h4></div>
                            <div><h4>{item.transactionType}</h4></div>
                      </div>
                    
                  </div>
                  
              ))}
        </div>
      
    )
}


export default DisplayTransaction
