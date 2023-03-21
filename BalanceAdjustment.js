import './Bal_Adjustment_Looks.css';
import React, {useState} from 'react';


  export default function BalanceAdjustment(){
    //intialization of variables to store and convert input into numbers
    const[balance, setBal] = React.useState(0)
    const balanceNum = Number(balance);

    const[totalPayments, setPayments] = React.useState(0)
    const totalPayNum = Number(totalPayments)

    const [depoAmt, setDepo] = React.useState('')
    const depoNum = Number(depoAmt);

    const [withdrawlAmt, setWith] = React.useState('')
    const withNum = Number(withdrawlAmt);

    const [Plan_Pay, setPlan] = React.useState('')
    const planNum = Number(Plan_Pay);

    const [Unplan_Pay, setUnplan] = React.useState('')
    const UnplanNum = Number(Unplan_Pay);
  
    
    
   
    


    //buttons for each textfield to store data
    const depo_click = () =>{
      if(depoNum<0){
        alert("Enter in a positive amount!")
        return
      }
      setBal(depoNum+balanceNum)
    }

    const with_click = () =>{
      if(balanceNum - withNum < 0){
        alert("Enter in a plausable amount!")
        return
      }
        setBal(balanceNum-withNum)
    }

    const Plan_click = () =>{
      if(planNum<0){
        alert("Enter in a positive value!")
        return
      }
      setPayments(totalPayNum+planNum)
    }
   
    const Unplan_click = () =>{
      if(UnplanNum<0){
        alert("Enter in a positive value!")
        return
      }
      setPayments(totalPayNum+UnplanNum)

    }

  
  return (
  
    <div className = "BalanceAdjustment">
      <h1 className='strong::before'>Balance Adjustment Page </h1>

     <h0>Enter Deposit Amount</h0>
     <input type="number" onChange={e => setDepo(e.target.value)} value = {depoAmt} />
     <button onClick={depo_click}> Deposit Funds </button>

     <h0>Enter Withdrawl Amount</h0>
     <input type="number" onChange={e => setWith(e.target.value)} value = {withdrawlAmt}/>
     <button onClick={with_click}> Withdraw Funds</button>

     <h0>Enter Planned Payment Amount</h0>
     <input type="number" onChange={e => setPlan(e.target.value)} value = {Plan_Pay}/>
     <button onClick={Plan_click}> Set Planned Payment</button>

     <h0>Enter Unplanned Payment Amount</h0>
     <input type="number" onChange={e => setUnplan(e.target.value)} value = {Unplan_Pay}/>
     <button onClick={Unplan_click}> Set Unplanned Payment</button>

     <h2>Balance: {balance}</h2>

     <h2>Total Planned Payment amount: {totalPayments}</h2>
    </div>
    )
    
  }


